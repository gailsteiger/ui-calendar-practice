(function () {
  'use strict';

  angular
    .module('uiCalendarPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, schedulerDialog, moment) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    // your event source


    $scope.events = [];


    $scope.eventClick = eventClick;
    $scope.eventSelected = eventSelected;

    /* config object */
    $scope.uiConfig = {
      calendar: {
        height:        600,
        editable:      true,
        header:        false,
        defaultView:   'agendaWeek',
        columnFormat:  {
          week: 'ddd'
        },
        selectable:    true,
        selectHelper:  true,
        selectOverlap: false,
        eventOverlap:  false,
        stick:         true,
        slotDuration:  '00:30:00',
        firstDay:      1,
        defaultDate:   '2015-11-30',
        timeFormat:    'h:mm',
        dayClick:      $scope.dayClick,
        eventClick:    $scope.eventClick,
        select:        $scope.eventSelected,
        timezone:      'local'
      }
    };

    /*
    moment notes
    time format 'HH:mm:ss'
    DOW start.day()
     */

    $scope.eventSources = [$scope.events];

    function dayClick(date, jsEvent, view) {
      alert(date);
    }

    function eventClick(event, jsEvent, view) {
      var origVal = _.findWhere($scope.events, {_id: event._id});

      $scope.alertMessage = ('Event was clicked ');

      var modalInstance = schedulerDialog.open(event.start, event.end);

      modalInstance.result.then(function (data) {
        origVal.start = moment(data.start);
          origVal.end = moment(data.end);
      });
    }

    function eventSelected(start, end, jsEvent) {
      $scope.alertMessage = ('Event was selected ');

      var modalInstance = schedulerDialog.open(start, end);

      modalInstance.result.then(function (data) {
        $scope.events.push({
          title: '',
          start: moment(data.start),
          end:   moment(data.end)
        });
      });
    }
  }
})();

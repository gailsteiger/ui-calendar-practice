(function () {
  'use strict';

  angular
    .module('uiCalendarPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, schedulerDialog, moment, uiCalendarConfig) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.events = [];

    $scope.eventClick = eventClick;
    $scope.eventSelected = eventSelected;
    $scope.dayClick = dayClick;

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

    $scope.eventSources = [$scope.events];

    function dayClick(date, jsEvent, view) {
      //uiCalendarConfig.calendars['myCalendar'].fullCalendar ('unselect');
    }

    function eventClick(event, jsEvent, view) {
      var eventIndex,
        value;

      eventIndex = _.findIndex($scope.events, function (obj) {
        return obj._id === event._id;
      });
      value = $scope.events[eventIndex];

      $scope.alertMessage = ('Event was clicked ');

      var modalInstance = schedulerDialog.open(event.start, event.end);

      modalInstance.result.then(function (data) {
        if (typeof data === 'object') {
          value.start = moment(data.start);
          value.end = moment(data.end);
        } else if (data === 'delete') {
          $scope.events.splice(eventIndex, 1);
        }
      });
    }

    function addEvent(start, end) {
      $scope.events.push({
        title: '',
        start: start.local(),
        end:   end.local()
      });
    }

    function eventSelected(start, end, jsEvent) {
      $scope.alertMessage = ('Event was selected ');

      addEvent(start, end);
      uiCalendarConfig.calendars['myCalendar'].fullCalendar('unselect');
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('uiCalendarPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.eventSources =
          // your event source
          {
            events: [ // put the array in the `events` property
              {
                title  : 'event1',
                start  : '2015-12-02'
              },
              {
                title  : 'event2',
                start  : '2015-11-30T18:35:00',
                end    : '2015-12-01T08:12:00'
              },
              {
                title  : 'event3',
                start  : '2015-12-05T12:30:00',
              }
            ]
          };



    //$scope.dayClick = dayClick;
    //$scope.eventClick = eventClick;
    //$scope.eventMouseover = eventMouseover;
    //$scope.eventMouseout = eventMouseout;

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 600,
        editable: true,
        header: false,
        defaultView: 'agendaWeek',
        columnFormat: {
          week: 'ddd'
        },
        selectable: true,
        selectHelper: true,
        slotDuration: '00:30:00',
        firstDay: 1,
        defaultDate: '2015-11-30',
        timeFormat: 'h:mm',
        dayClick: $scope.dayClick,
        eventClick: $scope.eventClick
        //eventDrop: $scope.alertOnDrop,
        //eventResize: $scope.alertOnResize
      }
    };



    function dayClick(date, jsEvent, view) {
      alert(date);
    }

    function eventClick(event, jsEvent, view) {

    }

    function eventMouseover(event, jsEvent, view) {

    }

    function eventMouseout(event, jsEvent, view) {

    }

  }
})();

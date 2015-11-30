(function() {
  'use strict';

  angular
    .module('uiCalendarPractice')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {

    $scope.eventSources = [
      {
        title  : 'event1',
        start  : '2015-11-30'
      },
      {
        title  : 'event2',
        start  : '2015-12-01',
        end    : '2015-12-03'
      },
      {
        title  : 'event3',
        start  : '2015-12-03T12:30:00',
        allDay : false // will make the time show
      }
    ];

    $scope.dayClick = dayClick;
    $scope.eventClick = eventClick;
    $scope.eventMouseover = eventMouseover;
    $scope.eventMouseout = eventMouseout;

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 600,
        editable: true,
        header: false,
        defaultView: 'agendaWeek',
        columnFormat: {
          week: 'ddd M/D'
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

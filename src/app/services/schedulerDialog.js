/**
 * Created by gailsteiger on 11/10/15.
 */
(function (angular) {
  'use strict';

  angular
    .module('uiCalendarPractice')
    .factory('schedulerDialog', dialog);

  dialog.$inject = ['$uibModal'];

  function dialog($uibModal) {
    return {
      open: open
    };

    /////////////////////////////////////////////////////////////////////

    function open(startTime, endTime) {
      var modalInstance = $uibModal.open({
        animation:   false,
        templateUrl: 'app/templates/schedulerDialog.html',
        controller:  ['$scope', function ($scope) {

          $scope.startTime = startTime.toDate();
          $scope.endTime = endTime.toDate();
          $scope.startDOW = startTime.format('ddd');
          $scope.endDOW = endTime.format('ddd');

          $scope.ok = function () {
            modalInstance.close({start: $scope.startTime, end: $scope.endTime});
          };
          $scope.cancel = function () {
            modalInstance.dismiss(false);
          };
          $scope.delete = function () {
            modalInstance.close('delete');
          };
          $scope.onKeyPress = function (event) {
            if (event.which === 13) {
              $scope.ok();
            }
          }
        }],
        windowClass: 'scheduler-dialog'
      });

      return modalInstance;
    }
  }
})(angular);

(function() {
  'use strict';

  angular
    .module('uiCalendarPractice')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();

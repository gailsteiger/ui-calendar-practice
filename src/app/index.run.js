(function() {
  'use strict';

  angular
    .module('uiCalendarPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

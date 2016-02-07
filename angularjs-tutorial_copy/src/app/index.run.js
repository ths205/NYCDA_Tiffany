(function() {
  'use strict';

  angular
    .module('angularTemplate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

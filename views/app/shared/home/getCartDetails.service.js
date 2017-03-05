(function() {
  'use strict';

  angular
    .module('app')
    .factory('getCartDetailsService', getCartDetailsService);

  getCartDetailsService.$inject = ['$http', '$q'];
  /* @ngInject */
  function getCartDetailsService($http, $q) {
    var service = {
      getCartDetails: getCartDetails
    };

    return service;
    
    function getCartDetails() {
      return $http.get('app/config/cartDetails.json')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
    
  }
})();
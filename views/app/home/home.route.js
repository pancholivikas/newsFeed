(function() {
  'use strict';

    angular.module( 'app.home' )
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('home',
                    {
                        url: '/',
                        templateUrl: '/views/app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                );
            $urlRouterProvider.otherwise('');
            $locationProvider.html5Mode(true);
        });
})();
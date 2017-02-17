(function(){
    'use strict';

    angular.module('andrewGui', ['ui.bootstrap','ui.utils', 'ui.router', 'ngAnimate', 'restangular', 'angular-loading-bar', 'home', 'reporting', 'common', 'ngFileUpload']);

    angular.module('andrewGui').config(function($stateProvider, $urlRouterProvider, $httpProvider) {

        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');
        $httpProvider.defaults.withCredentials = true;
    });

    angular.module('andrewGui').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

})();

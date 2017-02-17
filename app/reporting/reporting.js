(function(){
    'use strict';

    angular.module('reporting', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'restangular']);

    angular.module('reporting').config(function($stateProvider) {

        $stateProvider.state('reporting-template', {
            url: '/reporting',
            templateUrl: 'reporting/templates/reporting-template.html',
            controller: 'reportingController',
        });
        /* Add New States Above */

    });


})();

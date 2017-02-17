(function(){
    'use strict';

    angular.module('home', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'restangular']);

    angular.module('home').config(function($stateProvider) {

        $stateProvider.state('home-template', {
            url: '/home',
            templateUrl: 'home/templates/home-template.html',
            controller: 'homeController'
        });
        /* Add New States Above */

    });


})();

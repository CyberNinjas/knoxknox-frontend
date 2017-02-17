(function(){
    'use strict';

    angular.module('home').controller('homeController', function($scope, $state, $http, $window, variables) {
        $http.post(variables.API_URL + 'api/1.0/poll').then(function(response){
            $state.go('reporting-template');
        }).catch(function(error){
            //401 means not logged in, so redirect to login.
            $window.location.href = variables.LOGIN_URL;
            console.log(error);
        });

    });

})();

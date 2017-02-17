(function(){
    'use strict';

    angular.module('common').service('variables', function($http, $q) {
        this.API_URL ="http://localhost:7071/";
        this.LOGIN_URL = this.API_URL + 'api/1.0/auth/login/azuread';
    });

})();

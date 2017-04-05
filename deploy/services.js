(function() {
    angular
        .module('services', ['ngResource'])
        .constant('appServer', {
            serverPath: 'http://localhost:3000/'
        });
}());

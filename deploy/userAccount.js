(function() {
    angular
        .module('services')
        .factory('userAccount', ['$resource', 'appServer', userAccount]);

    function userAccount($resource, appServer) {
        return $resource(appServer.serverPath + '/api/Account/Register', null,
            {
                'loginUser': {method: 'POST'}
            });
    }
}());

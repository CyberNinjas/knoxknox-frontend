(function() {
    angular
        .module('services')
        .factory('userAccount', ['$resource', 'appServer', userAccount]);

    function userAccount($resource, appServer) {
        return $resource(appServer.serverPath + '/api/Account/Register', null,
            {
                'loginUser': {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(data, headersGetter){
                        var str = [];
                        for (var d in data)
                            str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
                        return str.join("&");
                    }
                }
            });
    }
}());

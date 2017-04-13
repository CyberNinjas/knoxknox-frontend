angular.module('myApp', [])
    .controller('myCtrl', function($scope, $http) {

        $scope.sendData = function() {
            //debugger
            var data = {
                username: $scope.username,
                password: $scope.password
            };

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('/adminlogin', data, config)
                .then(function(response) {
                    if(response.data)
                        $scope.msg = "Post Data Successfully";
                }, function(response) {
                    $scope.msg = "Failure";
                });
        };
    });

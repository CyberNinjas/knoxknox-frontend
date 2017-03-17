angular.module('myApp', [])
    .controller('loginCtrl', ['$scope', function($scope){
        $scope.redirect = function() {
            $location.path('/knoxknox-frontend/deploy/UserControl.html');
        };

        $scope.test = function() {
            $scope.testing = 'it works';
        };
    }]);
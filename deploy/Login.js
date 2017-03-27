angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function($scope) {
        $scope.toUserCtrl = function() {
            $window.location.href = "/UserControl.html";
        };
    }]);

(function() {
   angular
       .module('loginCtrl')
       .controller("MainCtrl", ['userAccount', MainCtrl]);

   function MainCtrl(userAccount) {
       var user = this;
       user.isLoggedIn = false;
       user.message = '';
       user.userData = {
           userName: '',
           password: ''
       };

       user.loginUser = function() {
           user.userData.grant_type = "password";

           userAccount.loginUser(user.userData,
                function(data) {
                    user.message = "registration successful";
                    user.userData = data;
                });
       }
   }
}());

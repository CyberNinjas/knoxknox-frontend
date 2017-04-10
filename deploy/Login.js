(function() {
   angular
       .module('loginCtrl', [])
       .controller("MainCtrl", ['userAccount', MainCtrl]);

   function MainCtrl(userAccount) {
       var user = this;
       user.isLoggedIn = false;
       user.message = '';
       user.userData = {
           userName: '',
           email: '',
           password: ''
       };

       user.loginUser = function() {
           user.userData.grant_type = "password";
           user.userData.userName =  user.userData.email;

           userAccount.loginUser(user.userData,
                function(data) {
                    user.isLoggedIn = true;
                    user.message = '';
                    user.password = '';
                    user.token = data.access_token;
                },
                function(response) {
                    user.password = '';
                    user.isLoggedIn = false;
                    user.message = response.statusText + "\r\n";
                    if(response.data.exceptionMessage)
                        user.message += response.data.exceptionManager;
                    if(response.data.error)
                        user.message += response.data.error;
                });
       }
   }
}());

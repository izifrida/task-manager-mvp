(function() {
    'use strict';

    SignUpController.$inject = ["$scope", "$state", "$firebaseAuth", "userService"];
    angular
        .module('signUp')

        .controller('signUpController', SignUpController);

    /**@ngInject*/
    function SignUpController($scope, $state, $firebaseAuth, userService) {
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.message = "";
        this.signUp = signUp;

        function signUp(isValid) {
            if (isValid) {
                userService.signUp(this.email, this.password);
            } else {
                this.message = "There are still invalid fields below!"
            }
        };

    }

})();
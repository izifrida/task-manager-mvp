(function() {
    'use strict';

    SignInController.$inject = ["$q", "$scope", "$state", "$firebaseAuth", "userService"];
    angular
        .module('signIn')

        .controller('signInController', SignInController);

    /**@ngInject*/
    function SignInController($q, $scope, $state, $firebaseAuth, userService) {
        this.email = "";
        this.password = "";
        this.signIn = signIn;

        function signIn(email, password) {
            userService.signIn(email, password);
        };
    }

})();
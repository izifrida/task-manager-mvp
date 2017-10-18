(function() {
    'use strict';

    angular
        .module('auth')

        .controller('authController', authController);

    /**ngInject*/
    function authController($state) {
        this.clickSignIn = clickSignIn;
        this.clickSignUp = clickSignUp;

        function clickSignIn() {
            $state.go('sign-in');
            angular.element(document.querySelector("#sign-in-button"))
                .addClass('md-accent');
            angular.element(document.querySelector("#sign-up-button"))
                .removeClass('md-accent');
        };

        function clickSignUp() {
            $state.go('sign-up');
            angular.element(document.querySelector("#sign-up-button"))
                .addClass('md-accent');
            angular.element(document.querySelector("#sign-in-button"))
                .removeClass('md-accent');
        }
    }
})();
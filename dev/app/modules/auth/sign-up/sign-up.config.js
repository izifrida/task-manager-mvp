(function() {
    'use strict';

    signUpConfig.$inject = ["$stateProvider"];
    angular
        .module('signUp')

        .config(signUpConfig);

    /**@ngInject*/
    function signUpConfig($stateProvider) {
        $stateProvider
            .state("sign-up", {
                parent: "auth",
                url: "/sign-up",
                templateUrl: "modules/auth/sign-up/sign-up.template.html",
                controller: "signUpController as signUp"
            });
    }

})();
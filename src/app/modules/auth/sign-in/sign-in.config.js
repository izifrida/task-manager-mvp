(function() {
    'use strict';

    angular
        .module('signIn')

        .config(signInConfig);

    /**@ngInject*/
    function signInConfig($stateProvider) {
        $stateProvider
            .state("sign-in", {
                parent: "auth",
                url: "/sign-in",
                templateUrl: "modules/auth/sign-in/sign-in.template.html",
                controller: "signInController as signIn"
            });
    }

})();
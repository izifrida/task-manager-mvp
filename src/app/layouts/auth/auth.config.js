(function() {
    'use strict';

    angular
        .module('auth')

        .config(authConfig);

    /**@ngInject*/
    function authConfig($stateProvider) {
        $stateProvider
            .state("auth", {
                abstract: true,
                templateUrl: "layouts/auth/auth.template.html",
                resolve: {
                    authCheck: isNotAuth
                }
            });

    }

    /**@ngInject*/
    function isNotAuth($state, userService, $q) {

        return userService.isAuthorized()
            .then(function() {
                $state.go('home');
            }, function() {
                console.log('loged out');
            })
    }

})();
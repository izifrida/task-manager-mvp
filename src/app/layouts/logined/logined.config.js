(function() {
    'use strict';

    angular
        .module('logined')

        .config(loginedConfig);

    /**@ngInject*/
    function loginedConfig($stateProvider) {
        $stateProvider
            .state("logined", {
                abstract: true,
                templateUrl: "layouts/logined/logined.template.html",
                resolve: {
                    authCheck: isAuth
                }
            });
    }

    /**@ngInject*/
    function isAuth($state, userService, $q) {

        return userService.isAuthorized()
            .then(function() {
                console.log('loged in')
            }, function() {
                $state.go('sign-in');
            })
    }

})();
(function() {
    'use strict';

    toDoAppConfig.$inject = ["$urlRouterProvider"];
    angular
        .module('toDoApp')

        .config(toDoAppConfig)

    /**@ngInject*/
    function toDoAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    }

})();
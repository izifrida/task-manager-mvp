(function() {
    'use strict';

    angular
        .module('toDoApp')

        .config(toDoAppConfig)

    /**@ngInject*/
    function toDoAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    }

})();
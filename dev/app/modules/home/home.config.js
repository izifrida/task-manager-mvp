(function() {
    'use strict';

    homeConfig.$inject = ["$stateProvider"];
    angular
        .module('home')

        .config(homeConfig);

    function homeConfig($stateProvider) {
        $stateProvider
            .state("home", {
                parent: "logined",
                url: "/home",
                templateUrl: "modules/home/home.template.html",
                controller: "homeController as home",
            });
    };

})();
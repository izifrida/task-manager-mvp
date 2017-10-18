(function() {
    'use strict';

    runApp.$inject = ["$rootScope", "$state"];
    angular
        .module('toDoApp')

        .run(runApp);

    /**@ngInject*/
    function runApp($rootScope, $state) {
        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
            if (error === "AUTH_REQUIRED") {
                $state.go("sign-in");
            }
        });
    };

})();
(function() {
    'use strict';

    angular
        .module('home')

        .controller('homeController', HomeController);

    /**@ngInject*/
    function HomeController($scope, $state, $mdDialog, homeService, userService) {
        var self = this;
        self.tasks = homeService.getTasks();
        self.addTask = addTask;
        self.keyword = homeService.getKeyword();

        $scope.$watch(function() {
            return homeService.getKeyword()
        }, function(newValue, oldValue) {
            if (newValue !== oldValue) {
                self.keyword = newValue;
            }
        });

        function addTask(ev) {
            $mdDialog.show({
                controller: 'addController as add',
                templateUrl: "modules/add/add.template.html",
                parent: angular.element(document.body),
            })
        };

    };

})();
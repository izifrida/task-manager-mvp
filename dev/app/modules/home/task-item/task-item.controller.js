(function() {
    'use strict';

    HomeController.$inject = ["$scope", "$state", "$mdDialog", "homeService", "userService"];
    angular
        .module('home')

        .controller('homeController', HomeController);

    /**@ngInject*/
    function HomeController($scope, $state, $mdDialog, homeService, userService) {
        var self = this;
        self.tasks = homeService.getTasks();
        self.delateTask = delateTask;
        self.showInfo = showInfo;
        self.addTask = addTask;
        self.editTask = editTask;
        self.keyword = homeService.getKeyword();

        $scope.$watch(function() {
            return homeService.getKeyword()
        }, function(newValue, oldValue) {
            if (newValue !== oldValue) {
                self.keyword = newValue;
            }
        });


        function delateTask(task) {
            homeService.delateTask(task);
        };

        function showInfo(task) {
            var textDetail = task.info;
            if (!textDetail) {
                $mdDialog.show(
                    $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('More info')
                    .textContent("No details about task")
                    .ok('Ok!')
                )
            } else {
                $mdDialog.show(
                    $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('More info')
                    .textContent(textDetail)
                    .ok('Ok!')
                );
            }
        };

        function addTask(ev) {
            $mdDialog.show({
                controller: 'addController as add',
                templateUrl: "modules/add/add.template.html",
                parent: angular.element(document.body),
            })
        };

        function editTask(ev, updatingTask) {
            $mdDialog.show({
                controller: 'editController as edit',
                templateUrl: "modules/edit/edit.template.html",
                parent: angular.element(document.body),
                locals: {
                    task: updatingTask
                }
            })
        }

    };

})();
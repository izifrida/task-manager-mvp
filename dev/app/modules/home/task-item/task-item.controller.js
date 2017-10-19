(function() {
    'use strict';

    taskItemController.$inject = ["$scope", "$state", "$mdDialog", "homeService", "userService"];
    angular
        .module('taskItem')

        .controller('taskItemController', taskItemController);

    /**@ngInject*/
    function taskItemController($scope, $state, $mdDialog, homeService, userService) {
        var self = this;
        self.showInfo = showInfo;
        self.editTask = editTask;
        self.deleteTask = deleteTask; 

        function deleteTask(){
            console.log('hello ', self.task);
            homeService.delateTask(self.task);
        }

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
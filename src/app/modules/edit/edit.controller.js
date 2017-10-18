(function() {
    'use strict';

    angular
        .module('edit')

        .controller('editController', EditController);

    /**@ngInject*/
    function EditController($scope, $stateParams, $timeout, $mdDialog, homeService, task) {
        $scope.myImage = '';
        $scope.myCroppedImage = '';

        this.editingTask = task;
        this.editingTask.date = new Date(task.date);
        this.image = this.editingTask.image;
        this.changeImage = changeImage;
        this.canselEditingImage = canselEditingImage;
        this.cropImage = cropImage;
        this.editTask = editTask;
        this.cancel = cancel;

        function changeImage() {
            angular.element(document.querySelector("#changeImage")).toggleClass("ng-hide");
            angular.element(document.querySelector("#taskImage")).toggleClass("ng-hide");
        };

        function canselEditingImage() {
            angular.element(document.querySelector("#changeImage")).toggleClass("ng-hide");
            angular.element(document.querySelector("#taskImage")).toggleClass("ng-hide");
            angular.element(document.querySelector("#cropedImage")).addClass("ng-hide");
            this.editingTask.image = this.image;
        };


        var handleFileSelect = function(evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            angular.element(document.querySelector("#cropArea")).removeClass("ng-hide");
            angular.element(document.querySelector("#cropedImage")).addClass("ng-hide");
            reader.onload = function(evt) {
                $scope.$apply(function($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        $timeout(function() {
            angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
        }
        );

        function cropImage() {
            this.editingTask.image = $scope.myCroppedImage;
            console.log(this.cropedImage);
            angular.element(document.querySelector("#cropArea")).addClass("ng-hide");
            angular.element(document.querySelector("#cropedImage")).removeClass("ng-hide");

        };

        function editTask(editingTask) {
            homeService.updateTask($stateParams.updatingTask, this.editingTask);
            $mdDialog.hide();
        };

        function cancel() {
            $mdDialog.cancel();
        };
    }

})();
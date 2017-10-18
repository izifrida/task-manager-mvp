(function() {
    'use strict';

    angular
        .module('add')

        .controller('addController', AddController);

    /**@ngInject*/
    function AddController($scope, $timeout, $mdDialog, homeService) {
        $scope.myImage = '';
        $scope.myCroppedImage = '';
        this.newName = "";
        this.newDate = "";
        this.newInfo = "";
        this.newImage = null;
        this.cropImage = cropImage;
        this.addTask = addTask;
        this.cancel = cancel;
        console.log("AddController");


        var handleFileSelect = function(evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            angular.element(document.querySelector("#cropArea")).removeClass("ng-hide");
            reader.onload = function(evt) {
                $scope.$apply(function($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        }

        $timeout(function() {
            angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect)
        });

        function cropImage() {
            this.newImage = $scope.myCroppedImage;
            angular.element(document.querySelector("#cropArea")).addClass("ng-hide");
            angular.element(document.querySelector("#cropedImage")).removeClass("ng-hide");
        };

        function addTask() {
            homeService.addNewTask(this.newName, this.newDate, this.newInfo, this.newImage);
            $mdDialog.hide();
        };

        function cancel() {
            $mdDialog.cancel();
        };
    }

})();
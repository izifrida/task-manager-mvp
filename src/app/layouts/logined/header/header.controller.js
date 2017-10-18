(function() {
    'use strict';

    angular
        .module('header')

        .controller('headerController', headerController);

    /**@ngInject*/
    function headerController($state, $mdDialog, userService, homeService) {
        this.userEmail = userService.getUserEmail();
        this.signOut = signOut;
        this.keyword = "";
        this.setKeyword = setKeyword;

        function signOut(ev) {
            var confirm = $mdDialog.confirm()
                .title('Log out?')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('No');
            $mdDialog.show(confirm).then(function() {
                userService.signOut();
                $state.go('sign-in');
            })
        };

        function setKeyword(){
            homeService.setKeyword(this.keyword);
        }

    }

})();
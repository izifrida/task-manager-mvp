(function() {
    'use strict';

    userService.$inject = ["$firebaseAuth", "$http", "$state", "$q", "$mdDialog"];
    angular
        .module("user")

        .factory("userService", userService);

    /**@ngInject*/
    function userService($firebaseAuth, $http, $state, $q, $mdDialog) {
        var user = {};
        var auth = firebase.auth();

        return {
            signUp: signUp,
            signIn: signIn,
            signOut: signOut,
            isAuthorized: isAuthorized,
            getUserId: getUserId,
            getUserEmail: getUserEmail
        };

        function signUp(email, password) {
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(function(firebaseUser) {
                    console.log(firebaseUser);
                    $state.go('home')
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    $mdDialog.show(
                        $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .textContent(errorMessage)
                        .ok('Ok!')
                    );
                })
        };

        function signIn(email, password) {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(function(firebaseUser) {
                    user = firebaseUser;
                    firebase.auth()
                        .currentUser
                        .getToken()
                        .then(function(idToken) {
                            localStorage.setItem('token', idToken);
                        });
                    localStorage.setItem('token', user.refreshToken);
                    $state.go('home')
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    $mdDialog.show(
                        $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .textContent(errorMessage)
                        .ok('Ok!')
                    )
                })
        };

        function signOut() {
            firebase.auth().signOut().then(function() {
                localStorage.removeItem('token');
                user = null;
            });
        };

        function isAuthorized() {
            var deffered = $q.defer();

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    user = firebase.auth().currentUser;
                    deffered.resolve();
                } else {
                    deffered.reject();
                }
            });

            return deffered.promise;
        };

        function getUserId() {
            return firebase.auth().currentUser.uid;
        }

        function getUserEmail() {
            return firebase.auth().currentUser.email;
        }
    }
})();
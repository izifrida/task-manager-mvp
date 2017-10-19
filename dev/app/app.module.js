//Initialize Firebase
var config = {
    apiKey: "AIzaSyDmbeGGFKlcVO5-CD8_szAK6cGwxOXFSDY",
    authDomain: "to-do-list-aabc6.firebaseapp.com",
    databaseURL: "https://to-do-list-aabc6.firebaseio.com",
    projectId: "to-do-list-aabc6",
    storageBucket: "to-do-list-aabc6.appspot.com",
    messagingSenderId: "660163713691"
};
firebase.initializeApp(config);


(function() {
    'use strict';

    angular
        .module('toDoApp', [
            'ngMaterial',
            'ui.router',
            'firebase',
            'ngImgCrop',
            'auth',
            'logined',
            'header',
            'add',
            'signIn',
            'signUp',
            'edit',
            'home',
            'taskItem',
            'user',
            'templates'
        ]);

})();
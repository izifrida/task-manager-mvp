(function() {
    'use strict';

    angular
        .module('home')

        .factory('homeService', ["$firebaseArray", "$firebaseStorage", "userService", function($firebaseArray, $firebaseStorage, userService) {
            var userId;
            var ref;
            var tasks;
            var keyword ="";

            return {
                getTasks: getTasks,
                delateTask: delateTask,
                addNewTask: addNewTask,
                updateTask: updateTask,
                tasks: tasks,
                setKeyword: setKeyword,
                getKeyword: getKeyword,
                keyword: keyword
            }

            function getTasks() {
                userId = userService.getUserId();
                ref = firebase.database().ref(userId).orderByChild('date');
                tasks = $firebaseArray(ref);
                return tasks
            };

            function addNewTask(newName, newDate, newInfo, newImage) {
                if (newInfo == undefined) newInfo = null;

                tasks.$add({ name: newName, date: newDate.getTime(), info: newInfo, done: false, image: newImage });
            };

            function delateTask(task) {
                tasks.$remove(task)
            };

            function updateTask(updatingTask, updatedTask) {
                var updatingTask = updatingTask;
                updatingTask = updatedTask;
                updatingTask.date = updatingTask.date.getTime();
                tasks.$save(updatingTask);

            };

            function setKeyword(word){
                keyword = word;
            };

            function getKeyword(){
                return keyword;
            }

        }])

})();
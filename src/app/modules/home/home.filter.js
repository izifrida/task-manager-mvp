(function() {

    angular
        .module('home')

        .filter('filterTasks', filterTasks);

    /**@ngInject*/
    function filterTasks() {
        return function(data, keyword) {
            var result = [];

            if (keyword) {
                data.forEach(function(task) {
                    var name = task.name.toUpperCase();
                    var info = task.info.toUpperCase();

                    if ((info.search(keyword.toUpperCase()) != -1) |
                        (name.search(keyword.toUpperCase()) != -1)) {
                        result.push(task);
                    };
                });
                return result;
            } else {
                return data;
            }
        }
    }

})()
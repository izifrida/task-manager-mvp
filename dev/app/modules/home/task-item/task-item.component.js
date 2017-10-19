(function(){
	'use strict'

	angular
		.module('taskItem')

		.component('taskItem', {
			templateUrl: 'modules/home/task-item/task-item.template.html',
			controller: 'taskItemController as itemCtrl',
			bindings: {
				task: '=',
			}
		});

})();
'use strict';
module.exports = function(app) {

	var taskList = require('../controllers/TaskListController');

	//TaskList
	app.route('/tasks')
		.get(taskList.list_all_tasks)
		.post(taskList.create_task);

	app.route('/tasks/:taskId')
		.get(taskList.read_task)
		.put(taskList.update_task)
		.delete(taskList.delete_task);

};

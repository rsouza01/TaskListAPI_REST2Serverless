'use strict';

const mysql = require('mysql');

function execSQLQuery(sqlQry, res){
	const connection = mysql.createConnection({
		host     : 'db4free.net',
		port     :  3306,
		user     : 'user_task_list',
		password : 'password_task_list',
		database : 'db_task_list'
	});

	connection.query(sqlQry, function(error, results, fields){
		if(error) 
			res.json(error);
		else
			res.json(results);
		connection.end();
		console.log('[*] Query executed with success.');
	});
}




exports.list_all_tasks = function(req, res) {
    console.log('[FC] list_all_tasks');

    execSQLQuery('SELECT * FROM tb_usuario', res);

};




exports.create_task = function(req, res) {

    console.log('[FC] create_task');

};


exports.read_task = function(req, res) {
    console.log('[FC] read_task');

};


exports.update_task = function(req, res) {

    console.log('[FC] update_task');

};


exports.delete_task = function(req, res) {

    console.log('[FC] delete_task');

};


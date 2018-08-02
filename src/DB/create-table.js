/*Free db hosting, no sensitive data....*/

const mysql      = require('mysql');
const connection = mysql.createConnection({
	  host     : 'db4free.net',
	  port     : 3306,
	  user     : 'user_task_list',
	  password : 'password_task_list',
	  database : 'db_task_list'
});

connection.connect(function(err){
	if(err) return console.log(err);
	console.log('[*] Conection ok.');
	createTable(connection);
	addRows(connection);
})


function createTable(conn){

	      const sql = "CREATE TABLE IF NOT EXISTS tb_usuario (\n"+
		                  "id_usuario int NOT NULL AUTO_INCREMENT,\n"+
		                  "nome varchar(150) NOT NULL,\n"+
		                  "senha varchar(250) NOT NULL,\n"+
		                  "PRIMARY KEY (id_usuario)\n"+
		                  ");";
	      
	      conn.query(sql, function (error, results, fields){
		                if(error) return console.log(error);
		                console.log('[*] Criou a tabela tb_usuarios com sucesso!');
		            });
}

function addRows(conn){
	  const sql = "INSERT INTO tb_usuario (nome,senha) VALUES ?";
	  const values = [
		          ['user1', '1c63129ae9db9c60c3e8aa94d3e00495'],
		          ['user2', '1c63129ae9db9c60c3e8aa94d3e00495'],
		          ['user3', '1c63129ae9db9c60c3e8aa94d3e00495']
		        ];
	  conn.query(sql, [values], function (error, results, fields){
		            if(error) return console.log(error);
		            console.log('[*] Registros adicionados com sucesso!');
		            conn.end();//fecha a conexão
		        });
}

// 引入模块
const mysql = require('mysql');

// 创建连接对象
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'albx'
})

module.exports = {
  userLogin(email,callback) {
    let sql = `select * from users where email = \'${email}\'`;

    connection.query(sql,(err,result) => {
      if(err) {
        callback(err);
      }else {
        callback(null,result[0]);
      }
    })
  }
}
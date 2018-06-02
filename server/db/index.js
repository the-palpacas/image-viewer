const mysql = require('mysql');

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  query(sql, args, callback) {
    this.connection.query(sql, args, (err, rows) => {
      if (err) return callback(err, null);
      //console.log('rows', rows);
      callback(null, rows);
    });
  }

  close(callback) {
    this.connection.end((err) => {
      if (err) return callback(err);
    });
  }
}

const dbConnection = new Database({
  host: 'localhost',
  user: 'root',
  password: 'P@$$W0rd',
  database: 'image_viewer',
});

module.exports = dbConnection;

const mysql = require('mysql');

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) { return reject(err); }
        resolve();
      });
    });
  }
}

const dbConnection = new Database({
  host: 'localhost',
  user: 'root',
  password: 'P@$$W0rd',
  database: 'image-viewer',
});

module.exports = dbConnection;

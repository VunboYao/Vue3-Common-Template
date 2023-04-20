const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'coderhub'
})

const statement = 'INSERT INTO products SET ?;'
const phoneJSON = require('./phone.json')

for (const phone of phoneJSON) {
  connection.query(statement, phone)
}

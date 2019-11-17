import mysql from 'mysql'

const theMysqlConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'selfdec'
})

export {
  theMysqlConnection,
}

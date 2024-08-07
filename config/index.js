import { createPool } from "mysql2"; 
import 'dotenv/config'

let connection = createPool({
  host: process.env.hostDB,
  database: process.env.dbName,
  user: process.env.userDB,
  password: process.env.dbPwd ,
 multipleStatements: true,  
  connectionLimit: 30
})
connection.on('connection', (err) => { 
    if(err) throw new Error('Couldn\'t connect to the database.Please try again later')
}) 

 
export {
    connection
}
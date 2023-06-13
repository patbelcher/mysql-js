//import the mysql2 library
import mysql from "mysql2"
import connectionInfo from "./secretStuff.js"

//connect to our mysql database  - give it our credentials
const connection = mysql.createConnection(connectionInfo)

//run a sumple query to get 2 movies
connection.query(
    'SELECT * FROM movies',
    function (error, results) {
        console.log(error)
        //console.talble the results
        console.table(results)
    }
    )

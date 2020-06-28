const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const connection = mysql.createConnection({
  host: "localhost",
  // Port
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "employeeTracker_DB"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // runApp();
});



const allEmployees = () => {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        console.table(res);
    })
};

allEmployees();
// runApp = () => {
//   inquirer 
//     .prompt({
//         n
//     })
// }
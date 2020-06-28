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
  password: "Mu$hr00m",
  database: "employeeTracker_DB"
});
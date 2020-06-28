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

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runApp();
});

runApp = () => {
  inquirer 
    .prompt({
        name: "manage",
        type: "rawlist",
        message: "What would you like to do? ",
        choices: [
            "View Employees",
            "Add Department",
            "Add Employee Roles",
            "Update Employee's Roles"
         ]
    })
    .then(function(answer) {
        switch (answer.manage) {
          case "View Employees":
              allEmployees();
              break;
          case "Add Department":
              addDepartment();
              break;
          case "Add Employee Roles":
              addRole();
              break;
          case "Update Employee's Roles":
              updateRole();
              break;
        }
    });
}

const allEmployees = () => {
    connection.query( `SELECT employee.first_name, employee.last_name, role.title, role.salary, department.dept_name FROM employee
        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department
        ON role.department_id = department.id`, (err, res) => {
        if (err) throw err;
        console.table(res);
        runApp();
    }) 
};

// const addDepartment = () => {

// };
// connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id"
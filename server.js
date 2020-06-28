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
            "Add Employee",
            "Add Employee Roles",
            "Update Employee's Roles"
         ]
    })
    .then(answer => {
        switch (answer.manage) {
          case "View Employees":
              allEmployees();
              break;
          case "Add Employee":
              addEmployee();
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
    }); 
};

const addDepartment = () => {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Input new department"
        })
        .then(answer => {
            connection.query("INSERT INTO department SET ?",
            {
                dept_name: answer.department
            },
            (err, res) => {
                if (err) throw err;
                console.log(`New department has been added!`);
                runApp();
            });
        }); 
};

const addEmployee = () => {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "Input new employee's first name"
            },
            {
                name: "lastName",
                type: "input",
                message: "Input new employee's last name" 
            },
            {
                name: "roleId",
                type: "input",
                message: "Input new employee's role ID"
            }
        ])
        .then(answer => {
            connection.query("INSERT INTO employee SET ?",
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: parseInt(answer.roleId)
            },
            (err, res) => {
                if (err){
                    console.log("Please create an new role first in order to add a new employee to new role.")
                    addRole();
                    return;
                } 
                console.log(`New employee has been added!`);
                runApp();
            });
        }); 
};

const addRole = () => {
    inquirer
        .prompt([
            {
                name: "titleNew",
                type: "input",
                message: "Input new role title"
            },
            {
                name: "salaryNew",
                type: "input",
                message: "Assign salary to new role (no commas)" 
            },
            {
                name: "deptId",
                type: "input",
                message: "Which department ID does this new role belong to?"
            }
        ])
        .then(answer => {
            connection.query("INSERT INTO role SET ?",
            {
                title: answer.titleNew,
                salary: parseInt(answer.salaryNew),
                department_id: parseInt(answer.deptId)
            },
            (err, res) => {
                if (err) throw err;
                console.log(`New role has been added!`);
                runApp();
            });
        }); 
};
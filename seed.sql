USE employeeTracker_DB;

INSERT INTO department (dept_name) VALUES ("Sales"); 
INSERT INTO department (dept_name) VALUES ("Engineering");
INSERT INTO department (dept_name) VALUES("Finance");
INSERT INTO department (dept_name) VALUES("Legal");

INSERT INTO role (title, salary, department_id) VALUES
("Sales Executive", 75000, 1); 
INSERT INTO role (title, salary, department_id) VALUES
("Product Manager", 80000, 1); 
INSERT INTO role (title, salary, department_id) VALUES
("Business Analyst", 60000, 3);
INSERT INTO role (title, salary, department_id) VALUES
("Customer Service Rep", 45000,1);
INSERT INTO role (title, salary, department_id) VALUES
("Software Engineer", 75000, 2); 
INSERT INTO role (title, salary, department_id) VALUES
("Accountant", 50000, 3);
INSERT INTO role (title, salary, department_id) VALUES
("Lawyer", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jovan", " Marco", 1, NULL); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Leslie", "Knope", 2, NULL); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Donna", "Meagle", 3, NULL); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("April", "Ludgate", 4, NULL); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Tom", "Haverford", 5, NULL); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Ben", "Wyatt", 6, NULL); 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Chris", "Traeger", 7, NULL);

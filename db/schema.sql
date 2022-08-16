DROP TABLE IF EXISTS departemnt;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name: VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id: INT PRIMARY KEY,
    title: VARCHAR(30) NOT NULL,
    salary: DECIMAL,
    department_id: INT
);

CREATE TABLE employee (
    id: INT PRIMARY KEY,
    first_name: VARCHAR(30) NOT NULL,
    last_name: VARCHAR(30) NOT NULL,
    role_id: INT,
    manager_id: INT,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL
);
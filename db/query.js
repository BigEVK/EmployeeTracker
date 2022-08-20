const connections = require('./connections');

class Queries{
    constructor (connections) {
        this.connections = connections
    }
    viewAllEmployees () {
        return this.connections.promise().query(`SELECT * FROM employees`);
    }
    viewAllEmpByDept () {
        return this.connections.promise().query(`SELECT employees.*, roles.title
                    AS department_name
                    FROM employees
                    LEFT JOIN roles
                    ON roles.department_id = employees.department_id`)
    }
    viewAllEmpByMngr () {
        return this.connections.promise().query(``)
    }
    addEmployee () {
        return this.connections.promise().query(`INSERT INTO candidates (first_name, last_name, industry_connected)
        VALUES (?, ?, ?)`)
    }
    removeEmployee () {
        return this.connections.promise().query(`DELETE FROM employees
                    WHERE id = ?`)
    }
    updtEmpRole () {
        return this.connections.promise().query(`UPDATE employees SET role_id =? WHERE id = ?`)
    }
}

module.exports = new Queries(connections)
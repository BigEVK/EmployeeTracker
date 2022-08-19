const connections = require('./connections');

class Queries{
    constructor (connections) {
        this.connections = connections
    }
    viewAllEmployees () {
        return this.connections.promise().query(`SELECT * FROM employees`);
    }
    viewAllEmpByDept () {
        return this.connections.promise().query(`SELECT employees.*, department.name
                    AS department_name
                    FROM employees
                    LEFT JOIN departments
                    ON department_id = employees.department_id`)
    }
    viewAllEmpByMngr () {
        return this.connections.promise().query(``)
    }
    addEmployee () {
        return this.connections.promise().query(`UPDATE employee
                    SET department = ?
                    WHERE id = ?`)
    }
    removeEmployee () {
        return this.connections.promise().query(`DELETE FROM employees
                    WHERE id = ?`)
    }
}

module.exports = new Queries(connections)
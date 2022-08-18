const mysql = require('mysql2');
// const express = require('express'); EXPRESS IS NOT NEEDED
const PORT = process.env.PORT || 3001;
// const app = express(); EXPRESS IS NOT NEEDED
const inputCheck = require('./utils/inputCheck');
const inquirer = require('inquirer');
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    }
);

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// }),
// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// DO NOT NEED A DATABASE!!!!!!!!!!!!!!!!!!!!
// // connect to dattabase
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'R00t',
//         database: 'dept_store'
//     },
//     console.log('Connected to the dept_store database')
// );

// Test to see that it returns the employees---- It does ---
// db.query(`SELECT * FROM employees`, (err, rows) => {
//     console.log(rows);
//   });


// Get all employees
app.get('/api/employees', (req, res) => {
    const sql = `SELECT employees.*, departments.name
                AS department_name
                FROM employees
                LEFT JOIN departments
                ON department_id = employees.department_id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Get a single employee
app.get('/api/employee/:id', (req, res) => {
    const sql = `SELECT employees.*, departments.name
                AS department_name
                FROM employees
                LEFT JOIN departments
                ON employees.department_id = departments.id
                WHERE employees.id = ?`;
    const params = [req.params.id];

db.query(sql, params, (err, row) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: row
    });
   });            
});




app.listen(PORT, () => {
    console.log(`Server tunning on port ${PORT}`);
});
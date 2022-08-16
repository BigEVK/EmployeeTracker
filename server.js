const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();
const inputCheck = require('./utils/inputCheck');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to dattabase
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'R00t',
        database: 'dept_store'
    },
    console.log('Connected to the dept_store database')
);


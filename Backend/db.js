const { createPool } = require('mysql');
const dotenv = require('dotenv');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'qr_generator',
    connectionLimit: 10
})

module.exports = pool;
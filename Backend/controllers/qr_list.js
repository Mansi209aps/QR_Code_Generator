const express = require("express");
const { validationResult } = require("express-validator");
const pool = require("../db");

const list = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    pool.query(`select * from qr`, (err, response) => {
        if (err) {
            // console.error('Error data fetching from database:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }


        // console.log('Data fetched from database');
        return res.status(200).json({ "success": true, "Data": response });
    })
}

exports.list = list;
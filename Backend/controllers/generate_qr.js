const express = require("express");
const { validationResult } = require("express-validator");
const pool = require("../db");

const generateQR = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { urlText } = req.body;
    // console.log('urlText:', urlText);

    // Insert the URL into the database
    pool.query('INSERT INTO qr (qr_date, qr_content) VALUES (CURDATE(), ?)', [urlText], (err, response) => {
        if (err) {
            // console.error('Error inserting URL into the database:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        // Continue with QR code generation and response handling
        // console.log('URL inserted into the database');
        return res.status(200).json({ "success": true });
    });
}

exports.generateQR = generateQR;
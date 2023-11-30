const express = require("express");
const { check } = require("express-validator");

const generate_qr = require('../controllers/generate_qr');

const router = express.Router();

router.post(
    "/",
    [check("urlText", "urlText is required").not().isEmpty()],
    generate_qr.generateQR
)

module.exports = router;
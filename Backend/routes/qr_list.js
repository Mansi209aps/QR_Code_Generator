const express = require("express");
const { check } = require("express-validator");

const qr_list = require("../controllers/qr_list");

const router = express.Router();

router.get('/', qr_list.list);

module.exports = router;
var express = require('express');
var router = express.Router();
const fieldType = require("../controllers/field-type.controller.js");

router.get("/", fieldType.getFieldTypes);

module.exports = router;
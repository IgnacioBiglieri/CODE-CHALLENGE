var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController')

// Página de login
router.get('/login', adminController);

module.exports = router;

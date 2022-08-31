var express = require('express');
const app = express();
var router = express.Router();
var adminController = require('../controllers/adminController')


// Página de login
router.get('/login', adminController.login);

module.exports = router;
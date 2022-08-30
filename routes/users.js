var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

// Lista de usuarios registrados
router.get('/list', userController.list);

// Pagina de registro de usuarios
router.post('/register', userController.register)

module.exports = router;

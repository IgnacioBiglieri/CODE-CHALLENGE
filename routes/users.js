var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var tokenMiddleware = require('../middleware/tokenMiddleware')

// Lista de usuarios registrados
router.get('/list', tokenMiddleware, userController.list);

// Pagina de registro de usuarios
router.post('/register', userController.register)

module.exports = router;

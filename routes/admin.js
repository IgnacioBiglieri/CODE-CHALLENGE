const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const loginMiddleware = require('../middlewares/loginMiddleware');


// Login de admins

router.get('/login', loginMiddleware, adminController.login);

module.exports = router;
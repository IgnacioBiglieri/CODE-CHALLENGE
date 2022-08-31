const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const loginMiddleware = require('../middlewares/loginMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');


// Login de admins

router.post('/login', loginMiddleware, adminMiddleware, adminController.login);

module.exports = router;
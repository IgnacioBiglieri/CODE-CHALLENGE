const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const loginMiddleware = require('../middlewares/loginMiddleware');


// Login de admins

router.post('/login', adminController.login);

module.exports = router;
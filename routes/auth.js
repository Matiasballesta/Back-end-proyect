const express = require('express');
const { matchedData } = require('express-validator');
const router = express.Router();
const {tokenSign} = require('../utils/handleJwt')
const {usersModel} = require('../models')
const {encrypt, compare} = require('../utils/handlePassword')
const { validatorRegister, validatorLogin } = require('../validators/auth')
const {registerControl, loginCtrl} = require('../controllers/auth')



//Crea un registro
router.post("/register", validatorRegister, registerControl)

router.post("/login", validatorLogin, loginCtrl)





module.exports = router;
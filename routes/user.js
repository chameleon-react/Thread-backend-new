var express = require('express');
var router = express.Router();
const userController = require('../controller/userContoller')

router.post('/',userController.createUser)
router.post('/login',userController.login)

router.post('/order',userController.order)

module.exports = router;

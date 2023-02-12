const express = require('express');
const router = express.Router();
const c = require("../utils/catchAsync")
const {signIn,signUp} = require('../controllers/AuthController.js');
router.route("/login").post(c(signIn));
router.route("/signup").post(c(signUp));
module.exports = router;
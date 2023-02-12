const express = require('express');
const router = express.Router();
const c = require("../utils/catchAsync")
const {signIn,signUp} = require('../controllers/AuthController.js');
/**
 * @swagger
 * tags:
 *  - name: User
 *    description: User management  
 */
/** 
 * @swagger
 *  /api/login:
 *   post:
 *    summary: Login
 *    tags:
 *     - User
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       description: User management
 *       schema:
 *        $ref: '#/components/schemas/User'
 *    responses:
 *     200:
 *      description: "User logged in successfully"
 *      content:
 *       application/json:
 *        description: Token
 *        schema:
 *         token:
 *          type: string
 */
router.route("/api/login").post(c(signIn));
/** 
 * @swagger
 *  /api/signup:
 *   post:
 *    summary: sign up
 *    tags:
 *     - User
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       description: User management
 *       schema:
 *        $ref: '#/components/schemas/User'
 *    responses:
 *     200:
 *      description: "User logged in successfully"
 *      content:
 *       application/json:
 *        description: Token
 *        schema:
 *         token:
 *          type: string
 */
router.route("/api/signup").post(c(signUp));
module.exports = router;
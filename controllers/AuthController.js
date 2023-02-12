const config = require("../config.js");
const {
  SignInValidator,
  SignUpValidator,
} = require("../services/validators.js");
const ErrorApp = require("../utils/ErrorApp.js");
const jwt = require("jsonwebtoken");
const db = require("../db/knex.js");
const bcrypt = require("bcrypt");
module.exports = {
  signIn: async (req, res, next) => {
    const schema = SignInValidator();
    const { error } = await schema.validateAsync(req.body);
    if (error) {
      throw new ErrorApp(error.details[0].message, 400, "Bad Request");
    }
    const user = await db("users")
      .where({
        email: req.body.email
      })
      .first();
    if (!user) {
      throw new ErrorApp("password or email is incorrect", 404, "Not Found");
    }
    const cr = await bcrypt.compare(req.body.password, user.password)
    if (!cr) {
        throw new ErrorApp("password or email is incorrect", 404, "Not Found");
      }
    const token = jwt.sign(
      {
        id: user.id,
      },
      config.jwt,
      {
        expiresIn: config.jwtexp,
      }
    );
    return res.status(200).json({
      token,
    });
  },
  signUp: async (req, res, next) => {
    const schema = SignUpValidator();
    const { error } = await schema.validateAsync(req.body);
    if (error) {
      throw new ErrorApp(error.details[0].message, 400, "Bad Request");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user =await db("users")
      .insert({ ...req.body, password: hashedPassword }).returning("id");
    const token = jwt.sign(
      {
        id: user[0].id,
      },
      config.jwt,
      {
        expiresIn: config.jwtexp,
      }
    );
    return res.status(200).json({
      token,
    });
  },
//   signOut: async (req, res, next) => {},
//   forgotPassword: async (req, res, next) => {},
//   resetPassword: async (req, res, next) => {},
//   changePassword: async (req, res, next) => {},
//   verifyEmail: async (req, res, next) => {},
//   verifyEmailToken: async (req, res, next) => {},
//   resetPasswordToken: async (req, res, next) => {},
};

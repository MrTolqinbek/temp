const Joi = require('joi');
module.exports = {
    SignInValidator:()=>{
        return Joi.object({
            email:Joi.string().email({}).required(),
            password:Joi.string().min(6).max(30).required(),
        })
    },
    SignUpValidator:()=>{
        return Joi.object({
            firstName:Joi.string().min(3).max(30).required(),
            lastName:Joi.string().min(3).max(30),
            email:Joi.string().email({}).required(),
            password:Joi.string().min(6).max(30).required(),
            role:Joi.string().valid('user','admin')})
    }
}
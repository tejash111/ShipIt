const Joi = require("joi")

const User = require("../models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().min(6).required()
})


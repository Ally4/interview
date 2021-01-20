import Joi from '@hapi/joi';

export const signup = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(15).required(),
});

export const loginValidationError = (req, res, next) => {
  const { error } = signup.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};
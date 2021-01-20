import Joi from '@hapi/joi';

export const signup = Joi.object().keys({
  title: Joi.string().min(5).max(15).required(),
  content: Joi.string().min(3).max(500).required(),
});

export const postValidationError = (req, res, next) => {
  const { error } = signup.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};

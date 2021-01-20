import dotenv from 'dotenv';

dotenv.config();

const authentify = (req, res, next) => {
  try {
    const token = req.header('token');
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: 'login first',
      });
    }
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: 'Invalid token',
    });
  }
  next();
};

export default authentify;

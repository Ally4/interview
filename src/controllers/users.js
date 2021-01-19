import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Models from '../database/models';

dotenv.config();

const { User } = Models;

class users {
  static async register(req, res) {
    try {
      const { name, email } = req.body;
      const find = await User.findOne({
        where: { email },
      });
      if (find) {
        return res.status(409).json({
          status: 409,
          message: 'the email in already in the system',
        });
      }
      const password = await bcrypt.hash(req.body.password, 10);
      const registered = await User.create({
        name,
        email,
        password,
      });
      return res.status(201).json({
        status: 201,
        message: 'the user have been registered',
        data: {
          name,
          email,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const find = await User.findOne({
        where: { email },
      });
      if (!find) {
        return res.status(404).json({
          status: 404,
          message: 'this email is not in the system',
        });
      }
      const decrypt = bcrypt.compareSync(password, find.password);
      if (!decrypt) {
        return res.status(400).json({
          status: 400,
          message: 'the password is not right',
        });
      }
      return res.status(200).json({
        status: 200,
        message: 'You loggedin successfully',
      });
    } catch (error) {
      return res.status(500).json({
        status: 5000,
        message: error,
      });
    }
  }
}

export default users;

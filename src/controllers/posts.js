import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Models from '../database/models';

dotenv.config();

const { Post } = Models;

class posts {
  static async createPost(req, res) {
    try {
      const { title, content } = req.body;
      const posted = await Post.create({
        title,
        content,
      });
      return res.status(201).json({
        status: 201,
        message: 'Your post have been recorded successfully',
        data: posted,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }
}

export default posts;

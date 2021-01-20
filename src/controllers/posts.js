import dotenv from 'dotenv';
import Models from '../database/models';

dotenv.config();

const { Post } = Models;

class posts {
  static async createPost(req, res) {
    try {
      const { title, content } = req.body;
      const post = await Post.create({
        title,
        content,
      });
      return res.status(201).json({
        status: 201,
        message: 'Your post have been recorded successfully',
        data: post,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }

  static async getposts(req, res) {
    const posted = await Post.findAll();
    return res.status(200).json({
      status: 200,
      message: 'here are the posts which have been created',
      data: posted,
    });
  }
}

export default posts;

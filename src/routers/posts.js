import { Router } from 'express';
import userPost from '../controllers/posts';
import middleware from '../middleware/post';
import { postValidationError } from '../validation/post';

const router = Router();

router.post('/api/v1/create-post', middleware, postValidationError, userPost.createPost);

router.get('/api/v1/get-posts', middleware, userPost.getposts);

export default router;

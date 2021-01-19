import { Router } from 'express';
import userPost from '../controllers/posts';

const router = Router();

router.post('/api/v1/create-post', userPost.createPost);

router.get('/api/v1/get-posts', userPost.getposts);

export default router;

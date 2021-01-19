import { Router } from 'express';
import userPost from '../controllers/posts';

const router = Router();

router.post('/api/v1/create-post', userPost.createPost);

export default router;

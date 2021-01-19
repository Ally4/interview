import { Router } from 'express';
import userRegistration from '../controllers/users';

const router = Router();

router.post('/api/v1/register', userRegistration.register);

export default router;

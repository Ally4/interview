import { Router } from 'express';
import userRegistration from '../controllers/users';
import { loginValidationError } from '../validation/login';
import { registerValidationError } from '../validation/register';

const router = Router();

router.post('/api/v1/register', registerValidationError, userRegistration.register);

router.post('/api/v1/login', loginValidationError, userRegistration.login);

export default router;

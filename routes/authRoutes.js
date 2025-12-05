import express from 'express';
import { loginController } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { getUserController } from '../controllers/getUserController.js';

const router = express.Router();

router.post('/login', loginController);
router.get('/me', verifyToken, getUserController);

export default router;
import express from 'express';
import userController from './controllers/userController.js'
const router = express.Router();

router.post('/sign', userController.handleUserCreation);
router.post('/login', userController.handleLogin);

export default router;
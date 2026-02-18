import express from 'express';
import userController from './controllers/userController.js'
const router = express.Router();

router.post('/sign', userController.handleUserCreation);
router.get('/login', userController.handleLogin);

export default router;
import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/auth';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

//logout user

router.post('/logout',logoutUser)

export default router;
import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const authRouter = express.Router(); // Rename the router variable
authRouter.post("/signup", signup);

export { authRouter };

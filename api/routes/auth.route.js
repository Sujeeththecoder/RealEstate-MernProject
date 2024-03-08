import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const authRouter = express.Router(); // Rename the router variable
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);

export { authRouter };

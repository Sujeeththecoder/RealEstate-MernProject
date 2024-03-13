import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';

const authRouter = express.Router(); // Rename the router variable
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post('/google', google);
export { authRouter };

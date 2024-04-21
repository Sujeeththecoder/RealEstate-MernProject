import express from 'express';
import { google, signin, signup, signOut } from '../controllers/auth.controller.js';

const authRouter = express.Router(); 
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post('/google', google);
authRouter.post('/signout', signOut);
export { authRouter };

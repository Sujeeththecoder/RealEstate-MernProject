import express from 'express';
import { test } from '../controllers/user.controller.js';

const userRouter = express.Router(); // Renamed the router variable
userRouter.get('/test', test);

export { userRouter };
// user.route.js


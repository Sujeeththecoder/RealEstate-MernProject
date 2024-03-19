import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';

const userRouter = express.Router(); // Renamed the router variable
userRouter.get('/test', test);
userRouter.post('/update/:id', updateUser)

export { userRouter };
// user.route.js


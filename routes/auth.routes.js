import { Router } from 'express';

import {signIn, signOut, signUp} from "../controllers/auth.controller.js";

const authRouter = Router();

// make your auth on the client side and make an api call to ->
// api/v1/auth/sign-up (POST) BODY {name, email, password} and
// a new user is created


authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;
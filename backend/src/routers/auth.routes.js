import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { postUserSchema, loginSchema } from "../schemas/auth.schemas.js"
import { postUser, loginUser, logoutUser } from '../controllers/auth.controllers.js';
import { authValidation } from "../middlewares/authSchema.middleware.js"


const authRouter = Router();

authRouter.post("/signup", validateSchema(postUserSchema), postUser);

authRouter.post("/signin", validateSchema(loginSchema), loginUser);

authRouter.delete("/logout", authValidation, logoutUser);

export default authRouter


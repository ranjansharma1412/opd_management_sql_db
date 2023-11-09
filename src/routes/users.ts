import express, { Express, Router } from "express";
import { createUser, getUsers } from "../controllers/users";

const router: Router = express.Router();

router.post('/user', createUser);
router.get('/user', getUsers);

export default router;
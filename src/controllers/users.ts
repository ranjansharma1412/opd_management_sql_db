import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: `${error}` });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await User.findAll();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: `${error}` });
    }
}
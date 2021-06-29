import { Router, Request, Response } from "express";

export const router = Router();

router.get("/students", async (req: Request, res: Response) => {
    return res.status(200).send(`Getting data of all students`);
});
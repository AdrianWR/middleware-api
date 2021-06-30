import { Router, Request, Response } from "express";

export const studentsRouter = Router();

studentsRouter.get("/students", async (req: Request, res: Response) => {
    return res.status(200).send(`Getting data of all students`);
});

studentsRouter.get("/student", async (req: Request, res: Response) => {
    res.status(201).send("banana");
});
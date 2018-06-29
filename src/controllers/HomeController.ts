import {Request, Response} from "express";

export let healthCheck = (req: Request, res: Response) => {
    res.json(
        {
            success: "Test After Publishing 3"
        }
    );
};
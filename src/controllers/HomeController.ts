import {Request, Response} from "express";
import Web3 from "web3";


export let healthCheck = (req: Request, res: Response) => {
    res.json(
        {
            success: "Test After Publishing 3"
        }
    );
};

export let donate = (req: Request, res: Response) => {

};
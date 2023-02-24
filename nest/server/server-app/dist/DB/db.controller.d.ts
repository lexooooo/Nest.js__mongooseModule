import { Request, Response } from 'express';
import { DbService } from './db.service';
export declare class DbController {
    dbservice: DbService;
    constructor(dbservice: DbService);
    signUser(req: Request, res: Response): Promise<void>;
    createUser(req: Request, res: Response): Promise<void>;
}

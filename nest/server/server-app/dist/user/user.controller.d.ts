import { Request, Response } from 'express';
import { UserService } from './user.service';
export declare class UserController {
    userservice: UserService;
    constructor(userservice: UserService);
    show(): string;
    create(req: Request, res: Response): Promise<void>;
}

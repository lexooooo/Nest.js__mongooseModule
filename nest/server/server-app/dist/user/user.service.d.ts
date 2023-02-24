import { users } from "./users.interface";
export declare class UserService {
    readonly user: users[];
    create(usr: users): void;
    findAll(): users[];
}

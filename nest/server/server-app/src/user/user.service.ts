import { Injectable } from "@nestjs/common";
import { users } from "./users.interface";


@Injectable()
export class UserService {
    public readonly user: users[] = [];


    create(usr: users) {
     this.user.push(usr);
    }

    findAll(): users[] {
     return this.user
    }
}    



import {Controller, Req, Res, Header, Body, Get, Post} from '@nestjs/common'
import {Request, Response, NextFunction} from 'express'
import { UserService } from './user.service'



@Controller('user')
export class UserController {
    constructor (public userservice: UserService) {}
 
    @Get()
    show () {
        return "THIS IS USER CONTROLLER SIDE"
    }

    @Post()
    async create(@Req() req: Request, @Res() res: Response) {
      await this.userservice.create({name: req.body.username, password: req.body.password});
      console.log(this.userservice);
      res.status(200).json({message: "CREATED"});
    }
}
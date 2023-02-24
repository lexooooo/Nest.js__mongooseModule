import {Controller, Req, Res, Header, Body, Get, Post} from '@nestjs/common'
import {Request, Response, } from 'express'
import { DbService } from './db.service'
import * as bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken"



@Controller('db')
export class DbController {
 
    constructor (public dbservice: DbService) {
       
    }
    
    //login
    @Post('signin')
       async signUser(@Req() req: Request, @Res() res: Response) {
       const {username, password} = await req.body 
       const found = await (await this.dbservice.find(username)).toJSON()
       // jwt
       found ? jwt.sign(found, "secret",
        {expiresIn: '60m'},
        (err, token) => {
           if (err) throw err; 
           res.status(200).json({token: token, message: "SIGNED IN"});
        }
       ) 
       : res.send("USERNAME NOT FOUND")
       //
    }

    //signup
    @Post('signup')
    async createUser(@Req() req: Request, @Res() res: Response) {
        const candidate = await this.dbservice.find(req.body.username);
        if (!candidate) {
            if (req.body.password.length >= 8) {
                const created = await this.dbservice.create(req.body.username, bcrypt.hash(req.body.password, 10));
                await created.save();
                res.status(200).send("CREATED");
            }
            else {
                res.send("PASSWORD MUST CONTAIN AT LEAST 8 CHARACTERS")
            }
        }
        else {
            res.send("USERNAME ALREADY EXISTS")
        }
    }


}
import {Controller, Req, Res, Header, Body, Get, Post} from '@nestjs/common'
import {Request, Response, NextFunction} from 'express'
import path from 'path'
import {join} from "path"



@Controller('home')
export class AppController {
    @Get()
    show (@Req() req: Request ,@Res() res: Response) {
        res.sendFile(join('C:/Users/user/Desktop/nest/server/server-app/src/client/index.html'))
    }
}
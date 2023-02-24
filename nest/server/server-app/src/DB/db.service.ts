import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {schema, newSchema} from './schema.model'


@Injectable()
export class DbService {

    constructor (@InjectModel("schema") public readonly newSchema: Model<Document>) {
     
        //this.find(newSchema)
        
    }

    async find(toFind: String) {

        return this.newSchema.findOne({username: toFind}); 
 
    }

    async create (reqUser: String, reqPass){
     
        return this.newSchema.create({username: reqUser, passwrd: reqPass})
        
    }

   

    
}
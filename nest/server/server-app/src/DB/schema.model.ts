import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import mongoose from 'mongoose'



@Schema()
export class schema {
 @Prop({type: String, required: true})
 username: String
 @Prop({type: String, required: true})
 password: String
}


export const newSchema = SchemaFactory.createForClass(schema);



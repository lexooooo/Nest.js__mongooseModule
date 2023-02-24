import mongoose from 'mongoose';
export declare class schema {
    username: String;
    password: String;
}
export declare const newSchema: mongoose.Schema<schema, mongoose.Model<schema, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, schema>;

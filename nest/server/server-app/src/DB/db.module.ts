import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DbService } from './db.service'
import {schema, newSchema} from './schema.model'
import { DbController } from './db.controller'


@Module({
    imports: [
     MongooseModule.forRoot("mongodb+srv://root:root@cluster0.ns55i.mongodb.net/test"),
     MongooseModule.forFeature([{name: "schema", schema: newSchema}])
    ],
    controllers: [DbController],
    providers: [DbService]
})
export class DbModule {
 

}

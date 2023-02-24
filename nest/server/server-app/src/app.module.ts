import {Module} from '@nestjs/common';
import { DbModule } from './DB/db.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import {ServeStaticModule} from '@nestjs/serve-static'
import { join } from 'path';



@Module({
  imports: [
    UserModule, 
    DbModule, 
    ServeStaticModule.forRoot({rootPath: join("C:/Users/user/Desktop/nest/server/server-app/src/client")}) 
    // ourDir is set to './Dist' in tsconfig
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {

}

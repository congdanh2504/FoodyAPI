import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MONGODB_URL } from './constants';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URL), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

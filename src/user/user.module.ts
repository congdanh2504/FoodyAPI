import { MongooseModule } from "@nestjs/mongoose";
import { forwardRef, Module } from "@nestjs/common";
import { UserSchema } from "./user.model";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [MongooseModule.forFeature([{name: "User", schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
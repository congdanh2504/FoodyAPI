import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateUserDto, User } from "./user.model";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {
    constructor(
        @InjectModel("User") private readonly userModel: Model<User>) {}

    async getProfile(id: string) {
        return await this.userModel.findById(id);
    }
}
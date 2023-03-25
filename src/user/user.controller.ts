import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CreateUserDto, User } from "./user.model";
import { UserService } from "./user.service";
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiTags('users')
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get("profile")
    getProfile(@Request() req) {
        return this.userService.getProfile(req.user.id);
    }
}
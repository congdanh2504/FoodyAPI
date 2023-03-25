import { Body, Controller, Param, Post, Request, UseGuards, HttpCode } from "@nestjs/common";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthDto, SignInDto } from "./auth.dto";
import { AuthService } from "./auth.service";
import {
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller("auth")
export class AuthController {
    constructor(private userService: AuthService) {}

    @Post("signup")
    async signUp(@Body() dto: AuthDto): Promise<string> {
        return this.userService.signUp(dto);
    }

    @UseGuards(LocalAuthGuard)
    @Post("signin")
    @HttpCode(200)
    async signIn(@Request() req, @Body() dto: SignInDto) { 
        return this.userService.signIn(req.user);
    }

    @Post("signinwithgoogle/:idToken")
    async signInWithGoogle(@Param() param: any) {
        return this.userService.signInWithGoogle(param.idToken);
    }
}
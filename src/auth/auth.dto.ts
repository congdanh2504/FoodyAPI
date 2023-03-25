import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class AuthDto {

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    username: string

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string
}

export class SignInDto {
    @ApiProperty()
    email: string

    @ApiProperty()
    password: string
}
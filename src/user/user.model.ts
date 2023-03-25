import * as mongoose from 'mongoose'
import { ApiProperty } from '@nestjs/swagger';

export const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: false},
    role: {type: String, required: true}
});

UserSchema.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['password']
        return ret
    }
});

export class CreateUserDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    role: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: string;
}
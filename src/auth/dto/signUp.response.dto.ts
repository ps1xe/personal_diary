import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { User } from "../entities/auth.entity";

export class SingUpResponceDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    jwtToken: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    user: User;
    
}
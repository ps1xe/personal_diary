import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { BaseEntity } from "src/common/entities/base.entity";


export class SingUpDto extends BaseEntity {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    login: string;

    @ApiProperty()
    @MinLength(6, { message: "Password must be at least 6 characters long" })
    @MaxLength(32, { message: "Password must be no more than 32 characters" })
    @IsString()
    @IsNotEmpty()
    password: string;
    
}
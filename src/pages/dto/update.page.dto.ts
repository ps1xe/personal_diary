import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePageDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly content: string;

}
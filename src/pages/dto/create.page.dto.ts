import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { BaseEntity } from "src/common/entities/base.entity";



export class CreatePageDto extends BaseEntity {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly content: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    readonly userId: string;

}
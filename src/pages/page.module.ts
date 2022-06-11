import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Page } from "./entities/page.entity";
import { PagesController } from "./page.controller";
import { PagesService } from "./page.service";

@Module({
    imports: [TypeOrmModule.forFeature([Page])],
    providers: [PagesService],
    controllers: [PagesController]
})
export class PagesModule { }
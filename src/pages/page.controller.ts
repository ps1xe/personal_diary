import { Controller, Delete, Get, Post, Req, UseGuards, Patch, Body, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/guards/jwtAuthGuard.guard";
import { CreatePageDto } from "./dto/create.page.dto";
import { UpdatePageDto } from "./dto/update.page.dto";

import { Page } from "./entities/page.entity";
import { PagesService } from "./page.service";
import IGetPageUserInfoRequest from "./types";


@UseGuards(JwtAuthGuard)
@ApiTags('HomePage')
@Controller('home')
export class PagesController {
    constructor(public pageService: PagesService) { }

    @Get()
    getPagesForUser(@Req() req: IGetPageUserInfoRequest): Promise<Page[]> {

        return this.pageService.getPagesForUser(req.user.id);
    }

    @Post()
    createPageForUser(@Body() body: CreatePageDto): Promise<Page> {
        return this.pageService.createPageForUser(body);
    }

    @Delete("/:id")
    deletePageForUser(@Param() id: string): Promise<void> {
        return this.pageService.deletePageForUser(id);
    }

    @Patch("/:id")
    updatePageForUser(@Body() body: UpdatePageDto): Promise<Page> {
        return this.pageService.updatePageForUser(body)
    }




}
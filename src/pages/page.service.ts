import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePageDto } from "./dto/create.page.dto";
import { UpdatePageDto } from "./dto/update.page.dto";
import { Page } from "./entities/page.entity";

@Injectable()
export class PagesService {
    
    constructor(
        @InjectRepository(Page)
        private pageRepository: Repository<Page>) {
    }


    async getPagesForUser(id: string): Promise<Page[]> {
        return this.pageRepository.find({ where: { userId: id } })
    }


    async createPageForUser(dto: CreatePageDto): Promise<Page> {
        return this.pageRepository.save(dto);
    }


    async deletePageForUser(id: string): Promise<void> {
        try {

            await this.pageRepository.delete(id);

        }
        catch (e) {
            console.log(e);
        }
    }


    async updatePageForUser(dto: UpdatePageDto): Promise<Page> {
        return this.pageRepository.save(dto);
    }


}
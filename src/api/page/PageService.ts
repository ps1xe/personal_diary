import $api from "..";

import { Page, PageState } from "../../types/page/pageTypes";

export class PageService {

    static async createPage(page: Partial<Page>): Promise<PageState[]> {
        const res = await $api.post("/home", page);
        return res.data;
    }

    static async deletePage(id: string): Promise<void> {
        await $api.delete(`/home/${id}`)
    }

    static async getPages(): Promise<PageState[]> {
        const res = await $api.get("/home");
        return res.data;
    }

    static async updatePage(page: Partial<Page>): Promise<Page> {
        const res = await $api.patch(`/home/${page.id}`, page);
        return res.data;
    }

}


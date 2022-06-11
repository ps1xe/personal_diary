import { PageActionTypes } from "../../types/page/pageTypes"

export const createPage = (payload: string) => {
    return {
        type: PageActionTypes.CREATE_PAGE,
        payload
    }
}


export const deletePage = (payload: string) => {
    return {
        type: PageActionTypes.DELETE_PAGE,
        payload
    }
}


export const getPage = () => {
    return {
        type: PageActionTypes.GET_PAGE,
    }
}


export const updatePage = (id: string, content: string) => {
    return {
        type: PageActionTypes.UPDATE_PAGE,
        payload: {
            id,
            content
        }
    }
}

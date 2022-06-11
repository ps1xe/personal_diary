export enum PageActionTypes {
    CREATE_PAGE_SUCCESS = "CREATE_PAGE_SUCCESS",
    CREATE_PAGE = "CREATE_PAGE",
    GET_PAGE = "GET_PAGE",
    GET_PAGE_SUCCESS = "GET_PAGE_SUCCESS",
    UPDATE_PAGE = "UPDATE_PAGE",
    UPDATE_PAGE_SUCCESS = "UPDATE_PAGE_SUCCESS",
    DELETE_PAGE_SUCCESS = "DELETE_PAGE_SUCCESS",
    DELETE_PAGE = "DELETE_PAGE",
}


export interface Page {
    id: string;
    content: string;
}


export interface ICreatePage {
    userId: string;
    content: string;
}


export interface PageState {
    pages: Page[];
}


export interface CreateAction {
    type: PageActionTypes.CREATE_PAGE_SUCCESS | PageActionTypes.CREATE_PAGE;
    payload: string;
}


export interface PageReducer {
    pageReducer: PageState;
}


export interface UpdatePage {
    content: string;
    id: string;
}


export interface DeleteAction {
    type: PageActionTypes.DELETE_PAGE_SUCCESS | PageActionTypes.DELETE_PAGE;
    payload: string
}


export interface GetAction {
    type: PageActionTypes.GET_PAGE_SUCCESS | PageActionTypes.GET_PAGE;
    payload?: PageState
}


export interface UpdateAction {
    type: PageActionTypes.UPDATE_PAGE_SUCCESS | PageActionTypes.UPDATE_PAGE;
    payload: UpdatePage,
    id: string;
}


export type PageAction = CreateAction | DeleteAction | GetAction | UpdateAction;

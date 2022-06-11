import { CreateAction, DeleteAction, Page, UpdateAction, PageActionTypes, ICreatePage } from "../../../types/page/pageTypes";
import { call, Effect, put, takeEvery } from "redux-saga/effects"
import { PageService } from "../../../api/page/PageService"

function* sagaCreatePage(action: CreateAction): Generator<Effect, void> {
    try {
        const id = JSON.parse(localStorage.getItem('user')!).id;

        const pageObject: Partial<ICreatePage> = {
            userId: id,
            content: action.payload
        }

        const page = yield call(PageService.createPage, pageObject);


        yield put({ type: PageActionTypes.CREATE_PAGE_SUCCESS, payload: page })
    } catch (error) {
        console.log('Error', error);
    }
}


function* sagaDeletePage(action: DeleteAction): Generator<Effect, void> {
    try {

        yield call(PageService.deletePage, action.payload);

        yield put({ type: PageActionTypes.DELETE_PAGE_SUCCESS, payload: action.payload })
    } catch (error) {
        console.log('Error', error);
    }
}


function* sagaGetPage(): Generator<Effect, void, Page[]> {
    try {
        console.log()
        const pages = yield call(PageService.getPages);
        yield put({ type: PageActionTypes.GET_PAGE_SUCCESS, payload: pages })
    } catch (error) {
        console.log('Error', error);
    }
}


function* sagaUpdatePage(action: UpdateAction): Generator<Effect, void, Page> {
    try {

        const pageObject: Partial<Page> = {
            id: action.payload.id,
            content: action.payload.content
        }

        const page = yield call(PageService.updatePage, pageObject);


        yield put({ type: PageActionTypes.UPDATE_PAGE_SUCCESS, payload: page, id: action.payload.id })
    } catch (error) {
        console.log('Error', error);
    }
}



export function* sagaWatcherPages(): Generator<Effect, void> {
    yield takeEvery(PageActionTypes.CREATE_PAGE, sagaCreatePage);
    yield takeEvery(PageActionTypes.DELETE_PAGE, sagaDeletePage);
    yield takeEvery(PageActionTypes.GET_PAGE, sagaGetPage);
    yield takeEvery(PageActionTypes.UPDATE_PAGE, sagaUpdatePage);

}

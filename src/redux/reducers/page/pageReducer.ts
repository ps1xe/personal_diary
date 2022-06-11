import { PageAction, PageState, PageActionTypes } from "../../../types/page/pageTypes"

export const initialState = {
    pages: [],
}

export const pageReducer = (state: PageState = initialState, action: PageAction) => {
    switch (action.type) {

        case PageActionTypes.CREATE_PAGE_SUCCESS:

            return { pages: [...state.pages, action.payload] }

        case PageActionTypes.DELETE_PAGE_SUCCESS:
            return { ...state, pages: state.pages.filter(page => page.id != action.payload) };

        case PageActionTypes.GET_PAGE_SUCCESS:
            return { ...state, pages: action.payload };

        case PageActionTypes.UPDATE_PAGE_SUCCESS: {

            const newPage = [...state.pages];
            const completeIndex = newPage.findIndex(page => page.id === action.id);

            if (completeIndex === -1) {
                return state;
            }
            newPage[completeIndex] = action.payload;

            return { ...state, pages: newPage };
        }

        default:
            return state;
    }
}

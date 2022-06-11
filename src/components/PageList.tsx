import { useDispatch, useSelector } from "react-redux";
import { deletePage, updatePage } from "../redux/actions/page";
import { PageReducer } from "../types/page/pageTypes";
import { PageItem } from "./PageItem";

export const PageList = () => {
    const state = useSelector((state: PageReducer) => state.pageReducer)
    const dispatch = useDispatch();

    const editPage = (id: string, content: string) => {
        dispatch(updatePage(id, content))
    }

    const removePage = (id: string) => {
        dispatch(deletePage(id));
    }

    var k = 0;
    return (
        <>
            {state.pages.map(page => (
                <PageItem
                    key={"page" + String(k++)}
                    page={page}
                    deletePage={removePage}
                    editPage={editPage}
                />
            ))
            }

        </>
    );
}
import { ChangeEvent, useState } from "react";
import { Page } from "../types/page/pageTypes";
import "../App.css";


export interface PageProps {
    page: Page;
    deletePage: (arg0: string) => void;
    editPage: (arg0: string, arg1: string) => void;
}

export const PageItem = ({ page, deletePage, editPage }: PageProps) => {

    const handleDeletePage = () => deletePage(page.id);
    const [isPageUpdate, setIsPageUpdate] = useState(false);
    const [newContent, setContentTitle] = useState('');

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            editPage(page.id, newContent)
            setIsPageUpdate(!isPageUpdate)
        }
    }

    const handlePageUpdate = () => setIsPageUpdate(!isPageUpdate);
    const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContentTitle(event.target.value);
    }

    return (
        <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "20px", "marginLeft": "30px", "placeContent": "start", "marginRight": "30px" }} className="bg-dark">
            <div onKeyPress={handleSubmit} style={{ "width": "100%", "marginLeft": "20px", "paddingBottom": "20px" }}>
                {isPageUpdate ? <input style={{ "minWidth": "100%", "minHeight": "120px", "maxHeight": "auto", "wordBreak": "break-all", "height": "120px", "background": "transparent", "border": "none", "outline": "none", "color": "white" }} type='text' onChange={handleContentChange} placeholder={page.content} />
                    : <div id="page" style={{ "minWidth": "60%", "overflowX": "hidden", "maxHeight": "auto", "overflowY": "auto", "minHeight": "120px", "height": "120px", "wordBreak": "break-all", "marginBottom": "15px", "marginTop": "15px", "background": "rgba( 0,0,0,0 )", "color": "white" }}>{page.content}</div>}
            </div>

            <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
                <button style={{ "marginRight": "10px", "marginLeft": "10px" }} className="btn btn-primary" onClick={handlePageUpdate}>Изменить</button>
                <button style={{ "marginRight": "30px" }} className="btn btn-danger" onClick={handleDeletePage}>Удалить</button>

            </div>

        </div>

    );

}

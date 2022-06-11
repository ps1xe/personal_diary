import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux"
import { createPage } from "../redux/actions/page"

export const PageForm = () => {

    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!content.trim()) {
            return;
        }

        dispatch(createPage(content));
        setContent("");
    }

    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {

        setContent(event.target.value);
    }


    return (
        <form onSubmit={handleSubmit} style={{ "marginLeft": "30px", "marginRight": "30px" }} >
            <h2 style={{ "marginTop": "30px" }}>Content</h2>
            <input className="form-control" style={{ "height": "200px", "border": "1px solid #1E90FF" }} onChange={handleChangeInputValue}></input>
            <h2></h2>
            <button style={{"marginBottom": "50px", "marginRight": "30px", "marginTop": "10px" }} className="btn btn-success">Create page</button>
        </form >
    );


}
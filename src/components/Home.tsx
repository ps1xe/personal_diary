import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPage } from "../redux/actions/page";
import { HeaderAuth } from "./Header/HeaderAuth";
import { PageForm } from "./PageForm";
import { PageList } from "./PageList";


const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => { dispatch(getPage()) }, []);

    return (
        <div style={{ "display": "flex", "flexDirection": "column" }}>
            <HeaderAuth />
            <PageForm />
            <PageList />
        </div>
    );
}
export default Home;
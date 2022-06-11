import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth";

export const HeaderAuth = () => {

    const dispatch = useDispatch();

    const exit = () => {
        dispatch(logout());
    }

    return (

        <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }} className="bg-dark">
            <Link style={{ "marginLeft": "2%", "fontSize": "25px", "marginTop": "1%", "marginBottom": "1%", "color": "white" }} className="navbar-brand" to="/login">Personal Diary</Link>

            <div style={{ "display": "flex" }}>
                <Link style={{ "marginRight": "50px", "marginTop": "1%", "marginBottom": "1%" }} className="btn btn-danger" to="/login" onClick={exit}>Logout</Link>
            </div>

        </div>
    );
}
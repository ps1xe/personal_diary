import { Link } from "react-router-dom";

export const HeaderDefault = () => {
    return (

        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}} className="bg-dark">
            <Link style={{"marginLeft":"2%","fontSize":"25px","marginTop":"1%","marginBottom":"1%", "color": "white"}} className="navbar-brand" to="/login">Personal Diary</Link>

            <div style={{"display":"flex"}}>
                <Link style={{"marginRight":"5%","marginTop":"1%","marginBottom":"1%"}} className="btn btn-success" to="/login">Login</Link>
                <Link style={{"marginRight":"50px","marginTop":"1%","marginBottom":"1%"}} className="btn btn-danger" to="/registration">Registration</Link>
            </div>

        </div>

    );
}

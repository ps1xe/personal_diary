import { HeaderDefault } from "./Header/HeaderDefault";
import { login } from "../redux/actions/auth"
import { AuthReducer, User } from "../types/auth/authTypes";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Home from "./Home";


const Login = () => {

    const state = useSelector((state: AuthReducer) => state.authReducer)

    const [log, setLog] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [hiddenBlock, setHiddenBlock] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!log.trim && !password.trim) {
            return;
        }

        dispatch(login({ login: log, password: password } as User));
        setLog('');
        setPassword('')
        setHiddenBlock(true);

    }


    const handleChangeInputLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLog(event.target.value);
    }

    const handleChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }




    return (
        <div style={{ "height": "100vh" }} className="bg-info bg-opacity-25">
            <HeaderDefault />
            <div>
                <form style={{ "display": "flex", "flexDirection": "column", "marginLeft": "35%", "marginRight": "35%", "marginTop": "15%", "marginBottom": "20px", "justifyContent": "space-between", "alignItems": "center" }} className="bg-light" onSubmit={handleSubmit}>
                    <label style={{ "marginTop": "25px", "marginBottom": "5px" }} className="form-label">Login:</label>
                    <input style={{ "marginLeft": "5%", "marginRight": "5%", "width": "80%" }} className="form-control" onChange={handleChangeInputLogin} type="text" placeholder="Login" />

                    <label style={{ "marginTop": "15px", "marginBottom": "5px" }} className="form-label">Password:</label>
                    <input className="form-control" style={{ "marginLeft": "5%", "marginRight": "5%", "width": "80%" }} onChange={handleChangeInputPassword} type="password" placeholder="Password" />

                    <button style={{ "marginTop": "35px", "width": "80%", "marginBottom": "25px" }} className="btn btn-primary" >Login</button>
                </form>
                {!state.isAuth ? <div id="alertAuth" style={{ "marginLeft": "35%", "marginRight": "35%" }} className="alert alert-danger"> An error has occurred :(. Try again.</div> : <meta http-equiv="refresh" content="0;URL=https://personal-diary-chi.vercel.app/home" />}

            </div>
        </div>
    );
}
export default Login;
import { HeaderDefault } from "./Header/HeaderDefault";
import { isCome, login } from "../redux/actions/auth"
import { User } from "../types/auth/authTypes";
import { useDispatch } from "react-redux";
import { ChangeEvent, FormEvent, useState } from "react";
import { isAuth } from "../redux/saga/auth/authSagas";



const Login = () => {
    const [log, setLog] = useState('')
    const [password, setPassword] = useState('')
    const [hiddenBlock, setHiddenBlock] = useState(false);
    const dispatch = useDispatch()


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!log.trim && !password.trim) {
            return;
        }

        dispatch(login({ login: log, password: password } as User));
        setLog('');
        setPassword('')

    }


    const handleChangeInputLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLog(event.target.value);
    }

    const handleChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }



    const come = () => {
        dispatch(isCome());
        if (isAuth) {

        }
        else { setHiddenBlock(true) }
    }

    return (
        <div style={{ "height": "100vh" }} className="bg-info bg-opacity-25">
            <HeaderDefault />
            <div >
                <form style={{ "display": "flex", "flexDirection": "column", "marginLeft": "35%", "marginRight": "35%", "marginTop": "15%", "marginBottom": "20px", "justifyContent": "space-between", "alignItems": "center" }} className="bg-light" onSubmit={handleSubmit}>
                    <label style={{ "marginTop": "25px", "marginBottom": "5px" }} className="form-label">Login:</label>
                    <input style={{ "marginLeft": "5%", "marginRight": "5%", "width": "80%" }} className="form-control" onChange={handleChangeInputLogin} type="text" placeholder="Login" />

                    <label style={{ "marginTop": "15px", "marginBottom": "5px" }} className="form-label">Password:</label>
                    <input className="form-control" style={{ "marginLeft": "5%", "marginRight": "5%", "width": "80%" }} onChange={handleChangeInputPassword} type="password" placeholder="Password" />

                    <button style={{ "marginTop": "35px", "width": "80%", "marginBottom": "25px" }} className="btn btn-primary" onClick={come}>Login</button>
                </form>
                {hiddenBlock ? <div id="alertAuth" style={{ "marginLeft": "35%", "marginRight": "35%" }} className="alert alert-danger"> An error has occurred :( </div> : <div></div>}
            </div>
        </div>
    );
}
export default Login;
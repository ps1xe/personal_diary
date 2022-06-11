import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { HeaderDefault } from "./Header/HeaderDefault";
import { registration } from "../redux/actions/auth"
import { User } from "../types/auth/authTypes";


const Registration = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!login.trim && !password.trim && !repeatPassword.trim) {
            return;
        }

        dispatch(registration({ login: login, password: password } as User));
        setLogin('');
        setPassword('');
        setRepeatPassword('');

    }




    const handleChangeInputLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleChangeInputRepeatPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value);
    }



    return (
        <div style={{ "height": "100vh" }} className="bg-info bg-opacity-25">
            <HeaderDefault />
            <form style={{ "display": "flex", "flexDirection": "column", "marginLeft": "35%", "marginRight": "35%", "marginTop": "10%", "marginBottom": "20px", "justifyContent": "space-between", "alignItems": "center" }} className="bg-light" onSubmit={handleSubmit}>
                <label style={{ "marginTop": "25px", "marginBottom": "5px" }} className="form-label">Login:</label>
                <input style={{ "marginLeft": "5%", "marginRight": "5%", "width": "80%" }} className="form-control" onChange={handleChangeInputLogin} type="text" placeholder="Login" />

                <label style={{ "marginTop": "15px", "marginBottom": "5px" }} className="form-label">Password:</label>
                <input style={{ "marginLeft": "5%", "marginRight": "5%", "width": "80%" }} className="form-control" onChange={handleChangeInputPassword} type="password" placeholder="Password" />

                <label style={{ "marginTop": "15px", "marginBottom": "5px" }} className="form-label">Repeat password:</label>
                <input style={{ "marginLeft": "5%", "marginRight": "5%", "width": "80%" }} className="form-control" onChange={handleChangeInputRepeatPassword} type="password" placeholder="Repeat password" />


                <button style={{ "marginTop": "25px", "width": "80%", "marginBottom": "25px" }} className="btn btn-danger">Registration</button>

            </form>
            {password !== repeatPassword ? <div style={{ "marginLeft": "35%", "marginRight": "35%", "marginBottom": "10%" }} className="alert alert-danger"> Passwords do not match!!!</div> : <div></div>}
        </div >
    );
}
export default Registration;
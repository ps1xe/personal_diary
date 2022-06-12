import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { AuthService } from "../../../api/auth/AuthService";
import { Auth, AuthPageActionTypes, CreateUser, LoginUser, User, UserRequest } from "../../../types/auth/authTypes";


function* sagaRegistration(action: CreateUser): Generator<Effect, void, Auth> {
    try {
        const userObject: UserRequest = {
            login: action.user.login,
            password: action.user.password
        }
        const user = yield call(AuthService.registration, userObject);


        localStorage.setItem('token', user.jwtToken);
        localStorage.setItem('user', JSON.stringify(user.user));



        yield put({ type: AuthPageActionTypes.ISAUTH, isAuth: true })
    } catch (error) {
        console.log('Error', error);
    }
}


function* sagaLogin(action: LoginUser): Generator<Effect, void, Auth> {
    try {
        const userObject: UserRequest = {
            login: action.user.login,
            password: action.user.password
        }
        const user = yield call(AuthService.login, userObject);

        localStorage.setItem('token', user.jwtToken);
        localStorage.setItem('user', JSON.stringify(user.user));

        yield put({ type: AuthPageActionTypes.ISAUTH, isAuth: true })
    } catch (error) {
        console.log('Error', error);
    }
}

function* sagaLogout(): Generator<Effect, void> {

    localStorage.removeItem('token');
    localStorage.removeItem('user');

}


export function* sagaWatcherAuth(): Generator<Effect, void> {
    yield takeEvery(AuthPageActionTypes.REGISTRATION, sagaRegistration);
    yield takeEvery(AuthPageActionTypes.LOGIN, sagaLogin);
    yield takeEvery(AuthPageActionTypes.LOGOUT, sagaLogout);
}


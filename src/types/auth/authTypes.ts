export enum AuthPageActionTypes {

    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    REGISTRATION = "REGISTRATION",
    REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
    LOGOUT = "LOGOUT",
    ISAUTH = "ISAUTH"
}


export interface User {
    id: string;
    login: string;
    password: string;
}


export interface UserRequest {

    login: string;
    password: string;
}

export interface IsAuthenticationState {
    isAuth: boolean
}

export interface AuthReducer {
    authReducer: IsAuthenticationState;
}

export interface IsAuthAction {
    type: AuthPageActionTypes.ISAUTH;
    isAuth: boolean;
}

export interface CreateUser {
    type: AuthPageActionTypes.REGISTRATION_SUCCESS | AuthPageActionTypes.REGISTRATION;
    user: User
}


export interface LoginUser {
    type: AuthPageActionTypes.LOGIN_SUCCESS | AuthPageActionTypes.LOGIN;
    user: User
}


export interface LoginUserAction {
    type: AuthPageActionTypes.LOGIN_SUCCESS | AuthPageActionTypes.LOGIN;
    user: User
}


export interface Login {
    login: string;
    password: string;
}


export interface Registration {
    login: string;
    password: string;
    repeat_password: string;
}


export interface Auth {
    user: User;
    jwtToken: string;
}


export interface RegistrationAction {
    type: AuthPageActionTypes.REGISTRATION_SUCCESS | AuthPageActionTypes.REGISTRATION;
    user: User
}


export interface LoginUserAction {
    type: AuthPageActionTypes.LOGIN_SUCCESS | AuthPageActionTypes.LOGIN;
    user: User
}


export type AuthAction = RegistrationAction | LoginUserAction;
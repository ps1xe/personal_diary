import { AuthPageActionTypes, User } from "../../types/auth/authTypes"

export const login = (payload: User) => {
    return {
        type: AuthPageActionTypes.LOGIN,
        user: payload
    }
}


export const registration = (payload: User) => {
    return {
        type: AuthPageActionTypes.REGISTRATION,
        user: payload
    }
}


export const logout = () => {
    return {
        type: AuthPageActionTypes.LOGOUT,
    }
}

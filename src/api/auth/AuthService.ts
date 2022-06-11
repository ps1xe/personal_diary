import $api from "..";
import { UserRequest } from "../../types/auth/authTypes";

export class AuthService {

    static async login(user: UserRequest) {
        return (await $api.post('/login', user)).data;
    }


    static async registration(user: UserRequest) {
        return (await $api.post('/registration', user)).data;
    }

}
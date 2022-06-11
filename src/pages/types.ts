import { User } from "src/auth/entities/auth.entity";

export default interface IGetPageUserInfoRequest extends Request {
    user: User;
}
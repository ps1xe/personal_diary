import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { AuthService } from "../auth.service";
import { User } from "../entities/auth.entity";

require('dotenv').config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(public authService: AuthService) {

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
            ignoreExpiration: false
        } as StrategyOptions);
    }


    async validate(payload: { sub: string }): Promise<User> {
        const userId = payload.sub;

        return this.authService.findOneOrFail(userId);
    }
}

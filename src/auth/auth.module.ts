import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthConroller } from "./auth.controller";
import { AuthService } from "./auth.service";
import { User } from "./entities/auth.entity";
import { JwtStrategy } from "./strategy/jwt.strategy";

require('dotenv').config();

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: process.env.SECRET_KEY, signOptions: { expiresIn: process.env.TOKEN_LIFETIME } })
    ],
    controllers: [AuthConroller],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SingUpDto } from "./dto/signUp.dto";
import { SingUpResponceDto } from "./dto/signUp.response.dto";
import { User } from "./entities/auth.entity";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SingInDto } from "./dto/signIn.dto";
import { SingInResponceDto } from "./dto/signIn.response.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private authRepository: Repository<User>,
        private jwtService: JwtService
    ) { }

    async registration(dto: SingUpDto): Promise<SingUpResponceDto> {

        const isUserAlreadyExists = await this.authRepository.count({
            where: { login: dto.login }
        });

        if (isUserAlreadyExists === 1) {
            throw new ForbiddenException("Пользователь уже существует!!!");
        }

        const hashedPassword = await bcrypt.hash(dto.password, 5);
        const newUser = await this.authRepository.save(
            {
                login: dto.login,
                password: hashedPassword
            }
        );

        const user = await this.authRepository.findOne({
            where: { login: dto.login }
        });

        const jwtToken = await this.jwtService.signAsync({
            sub: newUser.id,
            login: newUser.login
        })
        return { jwtToken, user };
    }

    async login(dto: SingInDto): Promise<SingInResponceDto> {
        const user = await this.authRepository.findOne({
            where: { login: dto.login }
        });

        const isPasswordCorrect = await bcrypt.compare(dto.password, user.password)

        if (!user || !isPasswordCorrect) {
            throw new ForbiddenException("Неверное имя пользователя или пароль!!!");
        }

        const jwtToken = await this.jwtService.signAsync({
            sub: user.id,
            login: user.login
        })

        return { jwtToken, user };
    }


    async findOneOrFail(id: string): Promise<User> {
        return this.authRepository.findOneOrFail({ where: { id: id } })
    }
}
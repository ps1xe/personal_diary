import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { SingInDto } from "./dto/signIn.dto";
import { SingInResponceDto } from "./dto/signIn.response.dto";
import { SingUpDto } from "./dto/signUp.dto";
import { SingUpResponceDto } from "./dto/signUp.response.dto";

@Controller()
@ApiTags('Authentication')
export class AuthConroller {
    constructor(public authService: AuthService) { }

    @Post('login')
    login(@Body() dataUser: SingInDto): Promise<SingInResponceDto> {
        return this.authService.login(dataUser);
    }

    @Post('registration')
    registration(@Body() dataUser: SingUpDto): Promise<SingUpResponceDto> {
        return this.authService.registration(dataUser);
    }

}
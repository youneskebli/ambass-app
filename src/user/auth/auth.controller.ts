import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCredentialsDto } from './dtos/user-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {}
    @Post('signup')
    signUp(@Body() userCredentialsDto:UserCredentialsDto) {
           return this.authService.signUp(userCredentialsDto)
    }
}

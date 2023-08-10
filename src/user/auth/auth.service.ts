import { Injectable } from '@nestjs/common';
import { UserCredentialsDto } from './dtos/user-credentials.dto';

@Injectable()
export class AuthService {
    async signUp(userCredentialsDto:UserCredentialsDto):Promise<any> {
        return 'user signup with success'
    }
}

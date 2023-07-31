import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/components/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email, pass) {
    const user: User = await this.usersService.findOneByEmail(email);
    console.log(user);
    if (user) {
      const checkPass = await bcrypt.compare(pass, user.password);
      if (checkPass) {
        const payload = { sub: user.id, username: user.email };
        return {
          id: user.id,
          nome: user.nome,
          email: user.email,
          token: await this.jwtService.signAsync(payload),
        };
      }
    }

    throw new UnauthorizedException();
  }
}

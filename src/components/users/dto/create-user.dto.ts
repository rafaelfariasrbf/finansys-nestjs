import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O campo nome é obrigatório.' })
  nome: string;
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'O campo e-mail é obrigatório.' })
  password: string;
}

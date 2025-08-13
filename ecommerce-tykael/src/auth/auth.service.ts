import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from 'src/users/entities/user.entity';
import { UsersRepository } from 'src/users/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  getAuth() {
    return `Autenticacion`;
  }

  async signIn(email: string, password: string) {
    const foundUser = await this.userRepository.getUserByEmail(email);
    if (!foundUser) throw new BadRequestException('Credenciales incorrectas');

    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (!validPassword)
      throw new BadRequestException('Credenciales incorrectas');

    const payload = {
      id: foundUser.id,
      email: foundUser.email,
      isAdmin: foundUser.isAdmin,
    };
    const token = this.jwtService.sign(payload);

    return {
      message: 'Usuario logueado...',
      token,
    };
  }

  async signUp(user: Partial<Users>) {
    const { email, password } = user;

    if (!email || !password)
      throw new BadRequestException('Se necesita email y password');
    const foundUser = await this.userRepository.getUserByEmail(email);
    if (foundUser) throw new BadRequestException('Email ya registrado');

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword)
      throw new BadRequestException('Error al hashear la contraseña');

    return await this.userRepository.addUser({
      ...user,
      password: hashedPassword,
    });
  }
}

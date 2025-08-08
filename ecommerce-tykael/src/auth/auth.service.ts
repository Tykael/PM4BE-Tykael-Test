import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UsersRepository) {}

  getAuth() {
    return `Autenticacion`;
  }

  signIn(email: string, password: string) {
    if (!email || !password) return `Credenciales incorrectas`;

    const user = this.userRepository.getUserByEmail(email);

    // if (!user || user.password !== password) return 'Credenciales incorrectas';

    return `Usuario logueado (TOKEN)`;
  }
}

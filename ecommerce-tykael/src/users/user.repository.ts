import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async getUsers(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const users = await this.usersRepository.find({
      take: limit,
      skip: skip,
    });

    return users.map(({ password, ...userNoPassword }) => userNoPassword);
  }

  async getUserById(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });

    if (!user) return `No se encontro el usuario con id ${id}`;
    const { password, ...userNoPassword } = user;
    return userNoPassword;
  }

  async addUser(user: Users) {
    const newUser = await this.usersRepository.save(user);
    const { password, ...userNoPassword } = newUser;
    return userNoPassword;
  }

  async updateUser(id: string, user: Partial<Users>) {
    await this.usersRepository.update(id, user);
    const updateUser = await this.usersRepository.findOneBy({ id });
    if (!updateUser) throw new Error(`No existe usuario con id ${id}`);
    const { password, ...userNoPassword } = updateUser;
    return userNoPassword;
  }

  async deleteUser(id: string) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new Error(`No existe usuario con id ${id}`);
    this.usersRepository.remove(user);
    const { password, ...userNoPassword } = user;
    return userNoPassword;
  }

  async getUserByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }
}

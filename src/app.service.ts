import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    try {
      return await this.usersRepository.find(); // Select * From User
    } catch (err) {
      return err;
    }
  }

  async getOneById(id: number): Promise<User> {
    try {
      return await this.usersRepository.findOneOrFail(id); // Select * From User Where user.id = id'
    } catch (err) {
      return err;
    }
  }

  async createUser(name: string): Promise<User> {
    console.log('From service =========', name);
    const newUser = this.usersRepository.create({ name });
    return await this.usersRepository.save(newUser);
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getOneById(id);
    user.name = name;
    return this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);
    return await this.usersRepository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}

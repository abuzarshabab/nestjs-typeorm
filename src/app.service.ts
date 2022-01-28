import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput, UserUpdateBody } from './interface/userInterface';

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

  async createUser(data: UserInput): Promise<User> {
    const newUser = this.usersRepository.create(data);
    return await this.usersRepository.save(newUser);
  }

  async updateUser(body: UserUpdateBody): Promise<User> {
    const { id, ...newInfo } = body;
    const user = await this.getOneById(id);
    this.usersRepository.update(user, newInfo);
    return this.usersRepository.save(body);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);
    return await this.usersRepository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}

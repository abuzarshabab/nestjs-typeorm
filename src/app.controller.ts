import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

interface UserBody {
  name: string;
}

interface UserUpdateBody {
  name: string;
  id: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.appService.getOneById(id);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.appService.getAll();
  }

  @Post()
  addUser(@Body() body: UserBody): Promise<User> {
    const name = body.name;
    return this.appService.createUser(name);
  }
  @Patch()
  updateUser(@Body() { name, id }: UserUpdateBody): Promise<User> {
    return this.appService.updateUser(id, name);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: number): Promise<User> {
    return this.appService.deleteUser(id);
  }

  @Get('/firstEndpoint:id')
  async firstAPI() {
    const user = await this.appService.createUser('Tufail karim khan');
    return user;
  }
}

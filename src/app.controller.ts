import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
import { UserInput, UserUpdateBody } from './dto/crud.user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addUser(@Body() body: UserInput): Promise<User> {
    console.log(body);
    return this.appService.createUser(body);
  }

  @Get('/:id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.appService.getOneById(id);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.appService.getAll();
  }

  @Put()
  updateUser(@Body() user: UserUpdateBody): Promise<User> {
    return this.appService.updateUser(user);
  }

  @Get('/firstEndpoint')
  async firstAPI() {
    const user = await this.appService.createUser({
      name: 'Abuzar',
      email: 'abuzarshabab@gmail.com',
      phone: 9973922757,
      dob: '14/09/1999',
    });
    return user;
  }

  @Delete('/:id')
  removeUser(@Param('id') id: number): Promise<User> {
    return this.appService.deleteUser(id);
  }
}

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getOneUser(@Param('id') id: number) : Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post()
  async addUser(@Body() body: User): Promise<number> {
    const insertResult = await this.userService.addUser(body);
    return insertResult.identifiers[0].id as number;
  }
}

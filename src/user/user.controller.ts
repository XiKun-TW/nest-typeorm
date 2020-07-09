import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import { RoleGuard, Roles } from '../guard/role.guard';
import { Role } from 'src/entities/staff.entity';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(new RoleGuard(new Reflector()))
  @Roles([Role.admin])
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

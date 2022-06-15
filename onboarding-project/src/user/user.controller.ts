import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Get(':name')
  getOneUser(@Param('name') userName: string) {
    return this.userService.getOneUser(userName);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/auth/roles.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getUsers(@Query('page') page?: string, @Query('limit') limit?: string) {
    if (page && limit)
      return this.userService.getUsers(Number(page), Number(limit));
    return this.userService.getUsers(1, 5);
  }
  @Get(`:id`)
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.getUserById(id);
  }
  // @HttpCode(201)
  // @Post()
  // addUser(@Body() user: CreateUserDto) {
  //   return this.userService.addUser(user);
  // }

  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}

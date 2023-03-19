import { ApiResponse } from '@nestjs/swagger';
import { Body, HttpStatus } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { UserService } from '../user.service';
export class UserController {
  constructor(private readonly userService: UserService){}
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateUserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create()
  }

}

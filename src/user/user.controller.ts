import { Body, Controller, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
// import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
import * as Path from "path";

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService){}

  @Post()
  create(@Body() createuserDto:CreateUserDto) {
    return this.userService.create()
  }

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  findone(@Param('id') id:string) {
    return this.userService.findOne(+id)
  }


  // @Patch(':id')
  // update(@Parm('id') id:string,)
  // UpdateUserDto(@Param('id') id:string) {
  //   return this.userService.findOne(+id)
  // }
}


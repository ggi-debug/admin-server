import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HdService } from './hd.service';
import { TestService } from "../test/test.service";

@Controller('hd')
export class HdController {
  constructor(private readonly hdService: HdService,
  private readonly testService:TestService
  ) {

  }
  @Get()
  findAll() {
    return this.hdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hdService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hdService.remove(+id);
  }
}

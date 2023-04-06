import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigmouleService } from './configmoule.service';


@Controller('configmoule')
export class ConfigmouleController {
  constructor(private readonly configmouleService: ConfigmouleService) {}


  @Get()
  findAll() {
    return this.configmouleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configmouleService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configmouleService.remove(+id);
  }
}

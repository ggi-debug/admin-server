import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//测试推送
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

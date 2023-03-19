import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBasicAuth, ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags("测试管理") // 配置一类接口的标题

export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({
    summary:"测试子标题"
  }) // 配置子标题
  @ApiBasicAuth() //配置鉴权
  // @ApiResponse() // 应答内容

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

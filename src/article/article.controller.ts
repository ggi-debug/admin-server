import { Controller, Get } from "@nestjs/common";
import { ConfigmouleService } from "../configmoule/configmoule.service";


@Controller('article')
export class ArticleController {
  constructor(private readonly config:ConfigmouleService) {
  }
  @Get()
  index():any{
    return "我的叔叔" + this.config.findAll('databases.url')
  }
}

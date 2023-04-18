import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from './app.service';
import { ApiBasicAuth, ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DbService } from "./db.service";
import { ConfigmouleService } from './configmoule/configmoule.service';
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config";
import databaseConfig from "./config/database.config";


@Controller()
@ApiTags("测试管理") // 配置一类接口的标题

export class AppController {
  constructor(  private readonly appService:AppService,
                private readonly  confitmouble:ConfigmouleService,
    @Inject('dbService')
    private readonly  dbService:string,
    private readonly config:ConfigService,
      @Inject(databaseConfig.KEY)
      private dabases:ConfigType<typeof databaseConfig>
  ) {
  }
  @ApiOperation({
    summary:"测试子标题"
  }) // 配置子标题
  @ApiBasicAuth() //配置鉴权
  // @ApiResponse() // 应答内容

  @Get()
  getHello(): any {
    return this.dbService;
  }

  @Get('/config')
  getConfig():any{
    // type getType<T extends ()=>any> = T extends ()=> infer  U ? U: T
    // type f = typeof databaseConfig
    console.log('9999',this.dabases.post)
    return this.confitmouble.findAll('databases.url')
  }

  // 配置项
  @Get('/config1')
  getConfigOver():any{

   console.log(this.config.get('upload.exts'))
    return process.env.APP_NAME
  }
}

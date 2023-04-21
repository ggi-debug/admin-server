// @ts-ignore
import { Controller, DefaultValuePipe, Get,Post, Inject, Param,Body, UseGuards, UsePipes } from "@nestjs/common";
import { AppService } from './app.service';
// @ts-ignore
import { ApiBasicAuth, ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DbService } from "./db.service";
import { ConfigmouleService } from './configmoule/configmoule.service';
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import { PrismaClient } from "@prisma/client";
import {ConduitPipe} from './conduit/conduit.pipe'
import CreateArticleDto from "./dto/create.article.dto";
import _ from 'lodash'
@Controller()
@ApiTags("测试管理") // 配置一类接口的标题

export class AppController {
  prisma:PrismaClient
  constructor(  private readonly appService:AppService,
                private readonly  confitmouble:ConfigmouleService,
    @Inject('dbService')
    private readonly  dbService:string,
    private readonly config:ConfigService,
      @Inject(databaseConfig.KEY)
      private dabases:ConfigType<typeof databaseConfig>


  ) {
    this.prisma = new PrismaClient()
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
     type getType<T extends ()=>any> = T extends ()=> infer  U ? U: T
     type f = typeof databaseConfig
    console.log('9999',this.dabases.post)
    return this.confitmouble.findAll('databases.url')
  }

  // 配置项
  @Get('/config1')
  getConfigOver():any{

   console.log(this.config.get('upload.exts'))
    return process.env.APP_NAME
  }



  // 管道学习

  @Get('/group/:id')
  @UsePipes(ConduitPipe)
  // ConduitPipe代表管道通行证 new DefaultValuePipe(1)默认值管道
  getGroup(@Param('id',new DefaultValuePipe(1)) id:number):any{
    //  查询数据findUnique
    return this.prisma.article.findUnique({
        where:{
          id:Number(id)
        }
      })
  }

  /**
   * 自己手写的管道
   * @param dto
   */
  // @Post('store')
  // async add(@Body(ConduitPipe) dto:CreateArticleDto){
  //   //  新增数据
  //   const result = await this.prisma.article.create({
  //     // @ts-ignore
  //     data:{
  //       title:dto.title,
  //       content:dto.content,
  //       thunb:dto.author,
  //       categoryId: _.random(1,10)
  //     }
  //   })
  //   console.log(result)
  //   return result
  // }

  /**
   * 系统提供的管道
   * @param dto
   */
  @Post('store')
  async add(@Body() dto:CreateArticleDto){
    //  新增数据
    const result = await this.prisma.article.create({
      // @ts-ignore
      data:{
        title:dto.title,
        content:dto.content,
        thunb:dto.author,
        categoryId: _.random(1,10)
      }
    })
    return result
  }
}

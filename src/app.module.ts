import { Module } from '@nestjs/common';
import dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DevService } from "./dev.service";
import { ConfigServices } from "./config.service";
import { DbService } from './db.service';
import { HdModule } from './hd/hd.module';
import { TestModule } from './test/test.module';
import { ConfigmouleModule } from './configmoule/configmoule.module';
//读取.env 到 process.env 环境变量中


// 自定义提供者
//  const hdService =  {
//    provide:'hdService',
//    useClass:process.env.NODE_ENV === 'development'?DevService:AppService
//  }

// 命令创建 service层文件 nest g s hd --no-spec --flat -d
// --no-spec 不创建测试文件  --flat 不创建子目录  --d 查看创建的目录
@Module({
  imports: [UserModule, HdModule, TestModule, ConfigmouleModule],
  controllers: [AppController],
  providers: [AppService,ConfigServices,
    {
      provide:'dbService',
     // 拿到configServerics中的参数
      inject:['ConfigServices'],
     //  创建一个工厂函数
      useFactory: async (configServices)=>{
        return new Promise<string>((resolve)=>{
          setTimeout(()=>{
            resolve( "我是你爸爸")
          },3000)
        })
      }
    }
    ]
})
export class AppModule {}

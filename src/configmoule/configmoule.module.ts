import { DynamicModule, Global, Module } from "@nestjs/common";
import { ConfigmouleService } from './configmoule.service';

@Global()
@Module({
  controllers: [],
  providers: [ConfigmouleService],
  exports:[ConfigmouleService]
})
export class ConfigmouleModule {
//  向外部暴露一个服务
  static register(options:{path:string}):DynamicModule {
    console.log("我的值",options)
    return {
      module: ConfigmouleModule,
      providers: [
        { provide: 'CONFIG_OPTIONS', useValue: options }
      ]
    }
  }
}

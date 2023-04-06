import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [TestService,{
    provide:'testserver',
    useValue:'我是test的属性'
  }],
  //允许别的模板使用我的方法及属性
  exports:[TestService,'testserver']
})
export class TestModule {}

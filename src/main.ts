import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from "./doc";
import { ValidationPipe } from "@nestjs/common";
import { Validate } from "./validate/validate";
import { ValidateExceptionFilter } from "./validate-exception/validate-exception.filter";
const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 创建系统提供的管道
  app.useGlobalPipes(new Validate())

  // 系统过滤异常
  app.useGlobalFilters(new ValidateExceptionFilter())
  //创建Swagger文档
  generateDocument(app)
  await app.listen(port,()=>{

  });
}
bootstrap();

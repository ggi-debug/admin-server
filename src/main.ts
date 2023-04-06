import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from "./doc";
const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //创建Swagger文档
  generateDocument(app)
  await app.listen(port,()=>{

  });
}
bootstrap();

import { Module } from '@nestjs/common';
import { HdService } from './hd.service';
import { HdController } from './hd.controller';
import { TestModule } from "../test/test.module";

@Module({
  imports: [TestModule],
  controllers: [HdController],
  providers: [HdService]
})
export class HdModule {}

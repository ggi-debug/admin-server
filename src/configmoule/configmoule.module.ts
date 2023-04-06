import { Module } from '@nestjs/common';
import { ConfigmouleService } from './configmoule.service';
import { ConfigmouleController } from './configmoule.controller';

@Module({
  controllers: [ConfigmouleController],
  providers: [ConfigmouleService]
})
export class ConfigmouleModule {}

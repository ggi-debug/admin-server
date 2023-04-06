import { Injectable,Inject } from '@nestjs/common';
import {ConfigServices} from "./config.service";
import { ConfigType } from "./type/ConfigType";
@Injectable()
export class AppService {
  constructor(
    @Inject('ConfigServices')
    private readonly configserver:ConfigType) {
  }
  getHello(): string {
    return  '我是app.service' +`${this.configserver.url}`
  }
}

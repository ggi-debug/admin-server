import { Injectable } from '@nestjs/common';

@Injectable()
export class DevService {
  getHello(): string {
    return '我是新创建的子目录';
  }
}

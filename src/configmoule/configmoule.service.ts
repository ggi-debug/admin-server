import { Injectable } from '@nestjs/common';


@Injectable()
export class ConfigmouleService {
  findAll() {
    return `This action returns all configmoule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configmoule`;
  }


  remove(id: number) {
    return `This action removes a #${id} configmoule`;
  }
}

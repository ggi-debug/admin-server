import { Injectable } from '@nestjs/common';


@Injectable()
export class TestService {
  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }


  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}

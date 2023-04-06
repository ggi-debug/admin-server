import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class HdService {
  constructor(
    @Inject('testserver')
    private readonly  testserver:Record<string, any>
  ) {
  }
  findAll() {
    return `我的hd方法${this.testserver}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hd`;
  }

  remove(id: number) {
    return `This action removes a #${id} hd`;
  }
}

import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class DbService {
  // 这里的构造器可以直接拿到config参数的值
  constructor(
    private readonly  options:Record<string, any>
  ) {
  }
  public content(){
    return `<h1 style="background: pink">我要链接数据库了${this.options.url}</h1>`
  }
}

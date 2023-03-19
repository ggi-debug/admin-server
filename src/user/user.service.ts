import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  create():string{
    return "你好我的User"
}
}

import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  create() {
    return "你好我的User";
  };

  findAll(): string {
    return "你好我是所有User";
  };

  findOne(id): string {
    return id;
  };
}

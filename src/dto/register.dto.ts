import { isByteLength, IsNotEmpty, Length, Validate } from "class-validator";
import { IsConfirmed } from "../rules/is-confirmed.rule";
import { IsNotExistsRule } from "../rules/is-not-exists.rule";

export  default class RegisterDto{

  @IsNotEmpty({message:"密码不能为空"})
  @Validate(IsConfirmed,{message:'确认密码输入错误'})
  password:string

  @IsNotEmpty({message:"确认密码不为空"})
  password_confirm:string

  @IsNotExistsRule('user',{message:'用户已存在'})
  @IsNotEmpty({message:"邮箱不能为空"})
  email:string
  avatar:string
  douyin:string
  github:string
}

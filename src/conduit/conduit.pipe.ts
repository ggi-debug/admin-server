// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class ConduitPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // console.log('我的值', value)
    // return metadata.metatype == Number ? + value : value

    // if(!value.title){
    //   throw new BadRequestException('标题不能为空')
    // }
    // if(!value.content){
    //   throw new BadRequestException('内容不能为空')
    // }
    // if(!value.author){
    //   throw new BadRequestException('作者不能为空')
    // }

    const object = plainToInstance(metadata.metatype, value);
    // @ts-ignore
    const errors = await validate(object);


    if (errors.length) {
      const messages = errors.map((error)=>({
        name:error.property,
        message:Object.values(error.constraints).map(v => v)
      }))
      throw new HttpException(messages,HttpStatus.UNPROCESSABLE_ENTITY);
    }
    return value;
  }
}

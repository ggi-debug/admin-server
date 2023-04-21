import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions
} from 'class-validator'
import { PrismaClient } from "@prisma/client";

// 验证表是否唯一
export function IsNotExistsRule(table:string,validationoptions?:ValidationOptions) {
  return function(object:Record<string, any>,propertyName:string) {
    registerDecorator({
      name:"IsNotExistsRule",
      target:object.constructor,
      propertyName:propertyName,
      constraints:[table],
      options:validationoptions,
      validator:{
        async validate(value:string,arg:ValidationArguments){
         const prisma = new PrismaClient()
          const user = await prisma[table].findFirst({
            where:{
              [propertyName]:arg.value
            }
          })
          return !Boolean(user)
        }
      }
    })
  }
}

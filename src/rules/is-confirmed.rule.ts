import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";


@ValidatorConstraint()
export class IsConfirmed implements ValidatorConstraintInterface{
  async validate(value:string,args:ValidationArguments){
    console.log("+++++",)
    return value === args.object[`${args.property}_confirm`]
  }
  defaultMessage(args:ValidationArguments) {
    return '比对失败'
  }
}

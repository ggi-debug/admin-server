import { ValidationPipe } from "@nestjs/common";
import { ValidationError } from "@nestjs/common/interfaces/external/validation-error.interface";

export class Validate extends ValidationPipe {
  protected mapChildrenToValidationErrors(error: ValidationError, parentPath?: string): ValidationError[]{
    const errors = super.mapChildrenToValidationErrors(error,parentPath)
    errors.map(error=>{
      for (const key in error.constraints){
        error.constraints[key] = `${error.property} - ${error.constraints[key]}`
      }
    })
    return  errors
  }
}

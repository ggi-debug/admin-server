import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  /**
   * 手机号（系统唯一）123
   */
  @ApiProperty({ example: '13611177421' })
  readonly phoneNumber: string;

  @ApiProperty({ example: '张腾飞' })
  name: string;

  @ApiProperty({ example: '123456' })
  password: string;

  @ApiProperty({ example: '15906475@qq.com' })
  email: string;

}

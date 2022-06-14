import { ApiProperty } from '@nestjs/swagger';

export class RestModel {
  @ApiProperty({ type: String, description: '유저의 아이디' })
  id: number;

  @ApiProperty({ type: String, description: '유저의 이름' })
  name: string;

  @ApiProperty({ type: String, description: '유저의 이메일' })
  email: string;
}

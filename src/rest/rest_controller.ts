import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { toDTO } from './rest_mapper';
import { RestModel } from './rest_model';
import { RestService } from './rest_service';

@ApiTags('rest')
@Controller({
  version: '1',
  path: 'rest',
})
export class RestController {
  constructor(private readonly restSvc: RestService) {}

  @Get('id/:id')
  @ApiOperation({
    description: '아이디에 따른 데이터 불러오기',
    summary: '아이디에 따른 데이터 불러오기',
  })
  @ApiResponse({ status: 200, type: RestModel })
  async getById(@Param('id') id: string): Promise<RestModel> {
    const result = await this.restSvc.getDataByIdAsync(+id);
    return toDTO(result);
  }

  @Get('name/:name')
  @ApiOperation({
    description: '이름에 따른 데이터 불러오기',
    summary: '이름에 따른 데이터 불러오기',
  })
  @ApiResponse({ status: 200, type: RestModel })
  async getByName(@Param('name') name: string): Promise<RestModel> {
    const result = await this.restSvc.getDataByNameAsync(name);
    return toDTO(result);
  }

  @Get('email/:email')
  @ApiOperation({
    description: '이메일에 따른 데이터 불러오기',
    summary: '이메일에 따른 데이터 불러오기',
  })
  @ApiResponse({ status: 200, type: RestModel })
  async getByEmail(@Param('email') email: string): Promise<RestModel> {
    const result = await this.restSvc.getDataByEmailAsync(email);
    return toDTO(result);
  }
}

import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.servics';
import { RestController } from './rest_controller';
import { RestService } from './rest_service';

@Module({
  imports: [],
  controllers: [RestController],
  providers: [PrismaService, RestService],
})
export class RestModule {}

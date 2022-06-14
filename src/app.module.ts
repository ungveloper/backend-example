import { Module } from '@nestjs/common';
import { RestModule } from './rest/rest_module';
import { GraphqlModule } from './graphql/graphql_module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RestModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { linearSearchModule } from './search/linearsearch/linearsearch.module';

@Module({
  imports: [linearSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

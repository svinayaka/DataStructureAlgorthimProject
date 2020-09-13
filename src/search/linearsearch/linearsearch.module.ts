import { Module } from '@nestjs/common';
import { LinearSearchController } from './linearsearch.controller';

@Module({
    imports: [],
    controllers: [LinearSearchController],
    providers: []
})
export class linearSearchModule {}

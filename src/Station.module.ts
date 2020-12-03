import { Module } from '@nestjs/common';
import { StationController } from './Station.controller';
import { StationService } from './Station.service';

@Module({
  imports: [],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}

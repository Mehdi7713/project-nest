import { Controller, Get, Param, Post } from '@nestjs/common';
import { StationService } from './Station.service';
import { Station } from './Station';

@Controller('/station')
export class StationController {
  constructor(private readonly stationservice: StationService) {
  }

  @Get()
  getListStation(): Station[]{
    return this.stationservice.getListStation();
  }
  @Get('/:name')
  getStation(@Param('name') name): Station{
    return this.stationservice.getStation(name);
  }


  @Post('/:name')
  addFavourite(@Param('name') name): Station{
    return this.stationservice.addFavouriteStation(name);
  }
}

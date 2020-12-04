import { Controller, Get, Param, Post } from '@nestjs/common';
import { StationService } from './Station.service';
import { Station } from './Station';
import { Info } from './Info';

@Controller('/station')
export class StationController {
  constructor(private readonly stationservice: StationService) {
  }

  @Get('/list')
  getListName() {
    return this.stationservice.getListName();
  }

  @Get('/info')
  getInfo(): Info{
  // give general information about the dataset
  return this.stationservice.getInfo();
}
  @Get()
  getListStation(): Station[] {
    return this.stationservice.getListStation();
  }
  @Get('/:name')
  getStation(@Param('name') name): Station{
    return this.stationservice.getStation(name);
  }

  @Post('/:name')
  addFavourite(@Param('name') name): Station | undefined { //Change the favorite status of a Station
    return this.stationservice.addFavouriteStation(name);
  }
}

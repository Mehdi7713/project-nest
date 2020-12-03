import { Injectable } from '@nestjs/common';
import data from './data.json';
import { Station } from './Station';

@Injectable()
export class StationService {
  private readonly list: Station[] = [];

  constructor() {
    const word = (<any>data);
    var newStation;
    for (var i = 0; i < word.elements.length; i++) {
      var listAttributs = Object.getOwnPropertyNames(word.elements[i]);
      if (listAttributs.find(element => element === "id")
        && listAttributs.find(element => element === "lon")
        && listAttributs.find(element => element === "lat")
        && !listAttributs.find(element => element === "nodes")
        && listAttributs.find(element => element === "tags")) {
        // var listAttributsTags = Object.getOwnPropertyNames(word.elements[i].tags);
        //console.log(typeof listAttributsTags.find(element => element === "STIF:zone"));
        // if (listAttributsTags.find(element => element === "STIF:zone")
        //     && listAttributsTags.find(element => element === "name")
        //     && listAttributsTags.find(element => element === "type:RATP")) {
          newStation = {
            id: word.elements[i].id,
            name: word.elements[i].tags.name,
            lat: word.elements[i].lat,
            lon: word.elements[i].lon,
            zone: word.elements[i].tags['STIF:zone'],
            type_RATP: word.elements[i].tags['type:RATP'],
            favorite : 0
          }
          this.addStation(newStation);
        //}
      }
    }
    // console.log(this.list.length);
  }

  async addStation(station: Station) {
    if (!this.list.includes(station)) {
      this.list.push(station);
    }
  }

  getStation(name: string) {
    console.log(name);
    console.log(this.list.find(x => x.name === name));
    return this.list.find(x => x.name === name);
  }

  getListName() {
    let TitleList: string[] = [];
    // let ListStation = this.list.find().exec();
    for(var i = 0 ; i < this.list.length ; i++){
      TitleList.push(this.list[i].name);
    }
    return TitleList;
  }

  addFavouriteStation(name: string){
    for(var i = 0 ; i < this.list.length ; i++){
      if(this.list[i].name === name){
        this.list[i].favorite = 1;
        return this.list[i];
      }
    }
    return undefined ;
}
}



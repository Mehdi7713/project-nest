import { Injectable } from '@nestjs/common';
import data from './data/data.json';
import { Station } from './Station';
import { Info } from './Info';

@Injectable()
export class StationService {
  private readonly list: Station[] = [];
  private info: Info;


  constructor() {

    this.addInfo();
    const word = (<any>data);
    var newStation;
    for (var i = 0; i < word.elements.length; i++) {
      var listAttributs = Object.getOwnPropertyNames(word.elements[i]);
      if (listAttributs.find(element => element === "id")
        && listAttributs.find(element => element === "lon")
        && listAttributs.find(element => element === "lat")
        && !listAttributs.find(element => element === "nodes")
        && listAttributs.find(element => element === "tags")) {
        newStation = {
          id: word.elements[i].id,
          name: word.elements[i].tags.name,
          lat: word.elements[i].lat,
          lon: word.elements[i].lon,
          zone: word.elements[i].tags['STIF:zone'],
          type_RATP: word.elements[i].tags['type:RATP'],
          favorite: 0
        }
        this.addStation(newStation);
      }
    }
  }

  addInfo(){
    this.info = {
      Url: "https://www.data.gouv.fr/fr/datasets/stations-et-gares-de-metro-rer-et-tramway-de-la-region-ile-de-france/",
      Mention_Attribution: "les contributeurs d'OpenStreetMap sous licence ODbL",
      Documentation: "http://wiki.openstreetmap.org/wiki/WikiProject_France/Transports_en_Île-de-France",
    }
  }

  addStation(station: Station) {
    if (!this.list.includes(station)) {
      this.list.push(station);
    }
  }

  getStation(name: string) {

    return this.list.find(x => x.name === name);
  }

  getListName() {
    // Return a list with this face : [name 1, name 2,..,name n,favorite 1,favorite 2,.., favorite n]
    let Name = [];
    let Favorite = [];
    for (var i = 0; i < 5; i++) {
      Name.push(this.list[i].name);
      Favorite.push(this.list[i].favorite);
    }
    var result = Name.concat(Favorite);
    return result;
  }

  getListStation() {
    let StationList: Station[] = [];
    // let ListStation = this.list.find().exec();
    for (var i = 0; i < this.list.length; i++) {
      StationList.push(this.list[i]);
    }
    return StationList;
  }

  getInfo() {
    return this.info;

  }

  addFavouriteStation(nom: string) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].name === nom) {
        if (this.list[i].favorite === 0) {
          this.list[i].favorite = 1;
        }
        else {
          this.list[i].favorite = 0;
        }
        return this.list[i];
      }
    }
    return undefined;
  }

}
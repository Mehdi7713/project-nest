export interface Station{
  readonly name: string;
  readonly zone: string;
  readonly type_RATP: string; // type_RATP is rer, tram or metro
  readonly id: number;
  readonly lat: number;
  readonly lon: number;
  favorite : number; // 1 if station favorite, 0 if not.

}
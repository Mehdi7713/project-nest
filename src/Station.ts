export interface Station{
  readonly id: number;
  readonly name: string;
  readonly lat: number;
  readonly lon: number;
  readonly zone: string;
  readonly type_RATP: string; // type_RATP is rer, tram or metro
  favorite : number; // 1 if station favorite, 0 if not.

}
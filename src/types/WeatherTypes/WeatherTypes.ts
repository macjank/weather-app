export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ISearchResult {
  country: string;
  id: number;
  coordinates: Coordinates;
  name: string;
  region: string;
  url: string;
}

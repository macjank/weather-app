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

export interface ICurrentWeather {
  location: {
    name: string;
    region: string;
    coordinates: Coordinates;
    localTime: Date;
  };
  current: {
    lastUpdated: Date;
    tempC: number;
    condition: {
      text: string;
      iconUrl: string;
      code: number;
    };
    windKph: number;
    windDegree: number;
    windDir: string;
    humidity: number;
    feelslikeC: number;
  };
}

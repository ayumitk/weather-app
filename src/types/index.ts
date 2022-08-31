interface Result {
  id: string;
  place_name: string;
  geometry: {
    coordinates: number[];
  };
}

interface City {
  city: string;
  id: string;
  coords: {
    lat: string;
    lng: string;
  };
  weather: {
    coord: {
      lat: number;
      lon: number;
    };
  };
}

interface Weather {
  data: {
    coord: {
      lat: number;
      lon: number;
    };
  };
}

export type { Result, City, Weather };

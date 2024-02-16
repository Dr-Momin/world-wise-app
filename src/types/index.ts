export interface FetchType {
  loading: boolean;
  data: [] | Record<string, any> | unknown;
  error: string;
}

export interface CitiesFetchType {
  loading: boolean;
  data: Array<CitiesDataType>;
  error: string;
}

export interface CurrentCityFetchType {
  loading: boolean;
  data: CitiesDataType;
  error: string;
}

export interface CoordinateTypes {
  lat: number;
  lng: number;
}

export interface CitiesDataType {
  cityName: string;
  country: string;
  date: string;
  emoji: string;
  id: number;
  notes: string;
  position: CoordinateTypes;
}

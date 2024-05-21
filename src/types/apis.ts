export type GeocodingObjType = {
  generationtime_ms: number;
  results?: [
    admin1: string,
    admin1_id: number,
    admin2: string,
    admin2_id: number,
    country: string,
    country_code: string,
    country_id: number,
    elevation: number,
    feature_code: string,
    id: number,
    latitude: number,
    longitude: number,
    name: string,
    population: number,
    postcodes: string[],
    timezone: string,
  ];
};

export type WeatherForecastType = {
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weathercode: number[];
  };
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  weathercode: string;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
};

export type WeatherTodayType = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  elevation: number;
  generationtime_ms: number;
  hourly: {
    temperature_2m: number[];
    time: string[];
    weathercode: number[];
  };
  hourly_units: {
    time: string;
    weathercode: string;
    temperature_2m: string;
  };
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
};

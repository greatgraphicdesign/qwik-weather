import type {GeocodingObjType} from '~/types/apis';
import type {ErrorResponse, SuccessResponse, WeatherResource} from '~/routes';

export async function useWeather(
  query: string,
  controller: AbortController
): Promise<WeatherResource> {
  function convertToFlag(countryCode: string) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  try {
    const data = {
      displayLocation: '',
      forecast: {},
      weatherToday: {},
    };

    if (/,\s/.test(query) || query.length < 4) {
      throw new Error(`Please enter the city name (only) or a zip code.`);
    }

    // 1) Get Geo Location
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`,
      {signal: controller.signal}
    );
    if (!res.ok) {
      throw new Error('Something went wrong when fetching the geo location.');
    }
    const geoJSON: GeocodingObjType = await res.json();

    // Open Meteo specific failure state
    if (!geoJSON.results) {
      throw new Error(`“${query}” not found.`);
    }

    const {latitude, longitude, timezone, name, admin1, country_code} =
      geoJSON.results[0];

    data.displayLocation = `${name}${admin1 ? `, ${admin1}` : ''} ${convertToFlag(country_code)}`;

    // 2) Get forecast
    const forecastRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&temperature_unit=fahrenheit&forecast_days=8&daily=weathercode,temperature_2m_max,temperature_2m_min`,
      {signal: controller.signal}
    );
    if (!forecastRes.ok) {
      throw new Error('Something went wrong when fetching the forecast.');
    }
    const forecastData = await forecastRes.json();
    data.forecast = forecastData.daily;

    // 3) Get today's weather
    const todayRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&temperature_unit=fahrenheit&forecast_days=2&hourly=weathercode,temperature_2m,temperature_2m&daily=temperature_2m_max,temperature_2m_min`,
      {signal: controller.signal}
    );
    if (!todayRes.ok) {
      throw new Error('Something went wrong when fetching the forecast.');
    }
    const todayData = await todayRes.json();
    data.weatherToday = todayData;

    console.log('data', data);
    console.log('calling', query);

    return data as SuccessResponse;
  } catch (error) {
    return error as ErrorResponse;
  }
}

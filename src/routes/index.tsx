import {
  $,
  component$,
  createContextId,
  Resource,
  useContext,
  useContextProvider,
  useResource$,
  useStore,
} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';

import {Alert} from '~/components/alert/alert';
import {Error} from '~/components/error';
import {Loader} from '~/components/loader';
import {Input} from '~/components/input';
import {WeatherLayout} from '~/components/weather';

import {PortalAPI} from '~/portal-provider';

import type {
  GeocodingObjType,
  WeatherForecastType,
  WeatherTodayType,
} from '~/types/apis';

export type WeatherContextType = {
  displayLocation: string;
  expandHourly: boolean;
  error: string;
  forecast: WeatherForecastType['daily'] | null;
  query: string;
  weatherToday: WeatherTodayType | null;
};

export const WeatherContext =
  createContextId<WeatherContextType>('weather-context');

interface SuccessResponse {
  displayLocation: string;
  forecast: WeatherForecastType['daily'];
  weatherToday: WeatherTodayType;
}

interface ErrorResponse {
  error: {
    name: string;
    message: string;
  };
}

type WeatherResource = SuccessResponse | ErrorResponse | undefined;

export default component$(() => {
  const weatherContextObj = useStore({
    displayLocation: '',
    expandHourly: false,
    error: '',
    forecast: null,
    query: '',
    weatherToday: null,
  });
  useContextProvider(WeatherContext, weatherContextObj);

  const portal = useContext(PortalAPI);
  const openModal = $(() =>
    portal(
      'modal',
      <Alert
        content={`
          <p>This is an enhanced version of the Classy Weather project in Jonas Schmedtmann’s Ultimate React Course, converted to the Qwik framework. It is offered without warrants or represents.</p>
          <p>The data you enter is stored on this device using your browser’s built-in storage. This can be emptied by clearing your browser data. The app tracks nothing.</p>
          <p>Weather data courtesy of open-meteo.com. Enjoy!</p>
          <p><a href="/apps">More apps</a></p>
        `}
      />
    )
  );

  const weatherResource = useResource$<WeatherResource>(({track, cleanup}) => {
    track(() => weatherContextObj.query);

    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));

    return getWeather(weatherContextObj.query, abortController);
  });

  /* truthy temporary overrides */
  // const error = 'This is an error.  ';
  // const isLoading = true;

  /* falsey temporary overrides */
  // const error = '';
  // const isLoading = false;

  return (
    <div class="weather-app">
      <button class="about-btn" onClick$={openModal}>
        &#9881;
      </button>

      <div class="inner">
        <h1>Check the Weather</h1>
      </div>
      <form class="inner">
        <Input />
        <button type="submit">Check Weather</button>
        <Resource
          onPending={() => <Loader />}
          onRejected={(reason) => <Error message={reason.message} />}
          onResolved={(weatherResource) => {
            console.log('weatherResource', weatherResource);
            (weatherContextObj as WeatherContextType).displayLocation = (
              weatherResource as SuccessResponse
            ).displayLocation;
            (weatherContextObj as WeatherContextType).forecast = (
              weatherResource as SuccessResponse
            ).forecast;
            (weatherContextObj as WeatherContextType).weatherToday = (
              weatherResource as SuccessResponse
            ).weatherToday;
            return <WeatherLayout />;
          }}
          value={weatherResource}
        />
      </form>
      {weatherContextObj.query}
    </div>
  );
});

export async function getWeather(
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

    if (/,\s/.test(query) && query.length < 4) {
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

export const head: DocumentHead = {
  title: 'Check the Weather',
  meta: [
    {
      name: 'description',
      content: 'A 7-Day weather forecast.',
    },
  ],
};

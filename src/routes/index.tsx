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
import {WeatherLayout} from '~/components/weather-layout';
import {useWeather} from '~/hooks/useWeather';
import {PortalAPI} from '~/portal-provider';

import type {WeatherForecastType, WeatherTodayType} from '~/types/apis';

export type WeatherContextType = {
  displayLocation: string;
  error: string;
  forecast: WeatherForecastType['daily'] | null;
  query: string;
  weatherToday: WeatherTodayType | null;
};

export const WeatherContext =
  createContextId<WeatherContextType>('weather-context');

export interface SuccessResponse {
  displayLocation: string;
  forecast: WeatherForecastType['daily'];
  weatherToday: WeatherTodayType;
}

export interface ErrorResponse {
  error: {
    name: string;
    message: string;
  };
}

export type WeatherResource = SuccessResponse | ErrorResponse | undefined;

export default component$(() => {
  const weatherContextObj = useStore({
    displayLocation: '',
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

    return useWeather(weatherContextObj.query, abortController);
  });

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
      {/* {weatherContextObj.query} */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Check the Weather',
  meta: [
    {
      name: 'description',
      content: 'A 7-Day weather forecast.',
    },
  ],
};

import {
  $,
  component$,
  createContextId,
  Resource,
  useContext,
  useContextProvider,
  useResource$,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';

import {Alert} from '~/components/alert/alert';
import {ErrorMessage} from '~/components/error-message';
import {Loader} from '~/components/loader';
import {Input} from '~/components/input';
import {WeatherLayout} from '~/components/weather-layout';

import {getWeather} from '~/hooks/getWeather';

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

export type WeatherResource = SuccessResponse | Error | undefined;

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
  const openModal = $(() => {
    document.body.classList.add('lock');
    portal(
      'modal',
      <Alert
        content={`
          <p>This is an enhanced version of the Classy Weather project in Jonas Schmedtmann’s Ultimate React Course, converted to the Qwik framework. It is offered without warrants or represents.</p>
          <p>The data you enter is stored on this device using your browser’s built-in storage. This can be emptied by clearing your browser data. The app tracks nothing.</p>
          <p>Weather data courtesy of open-meteo.com. Enjoy!</p>
          <p><a href="https://codesynopsis.com/apps">More apps</a></p>
        `}
      />
    );
  });

  const weatherResource = useResource$<WeatherResource>(
    async ({track, cleanup}) => {
      track(() => weatherContextObj.query);

      const abortController = new AbortController();
      cleanup(() => abortController.abort('cleanup'));

      const data = await getWeather(weatherContextObj.query, abortController);

      if (data && 'displayLocation' in data) {
        weatherContextObj.displayLocation = data.displayLocation;
        (weatherContextObj as WeatherContextType).forecast = data.forecast;
        (weatherContextObj as WeatherContextType).weatherToday =
          data.weatherToday;
      }

      return data;
    }
  );

  // On initial load, use localStorage if it exists
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const stored = localStorage.getItem('weatherLocation');

    if (
      stored &&
      JSON.parse(stored).length &&
      JSON.parse(stored) !== weatherContextObj.query
    ) {
      weatherContextObj.query = JSON.parse(stored) as string;
    } else {
      weatherContextObj.query = 'Bellingham';
    }
  });

  // On query change, overwrite localStorage, only if doesn't match existing
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({track}) => {
    track(() => weatherContextObj.query);

    const stored = localStorage.getItem('weatherLocation');

    if (
      (stored &&
        JSON.parse(stored).length &&
        JSON.parse(stored) !== weatherContextObj.query &&
        weatherContextObj.query.length) ||
      !(stored && JSON.parse(stored).length)
    ) {
      localStorage.setItem(
        'weatherLocation',
        JSON.stringify(weatherContextObj.query)
      );
    } else if (
      stored &&
      JSON.parse(stored).length &&
      JSON.parse(stored) !== weatherContextObj.query &&
      !weatherContextObj.query.length
    ) {
      localStorage.removeItem('weatherLocation');
    }
  });

  // mark current hour and scroll it into view
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({track}) => {
    track(() => weatherContextObj.weatherToday);

    if (weatherContextObj.weatherToday) {
      const today = weatherContextObj.weatherToday as WeatherTodayType;

      const dateNow = new Date().toLocaleTimeString('en', {
        timeStyle: 'short',
        hour12: false,
        timeZone: today.timezone,
      });
      const dateNowArr = dateNow.split(':');
      const spanHourMatch = document.querySelector(`#i${dateNowArr[0]}`);
      if (spanHourMatch) {
        spanHourMatch.classList.add('current');
        const spanHourMatchNext = spanHourMatch.nextElementSibling;
        if (spanHourMatchNext instanceof HTMLSpanElement) {
          spanHourMatchNext.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          });
        }
      }
    }
  });

  return (
    <div class="weather-app">
      <button class="about-btn" onClick$={openModal}>
        &#9881;
      </button>

      <div class="inner">
        <h1>Check the Weather</h1>
      </div>
      <form class="inner" preventdefault:submit>
        <Input />
        <Resource
          onPending={() => <Loader />}
          onRejected={(weatherResource) => (
            <ErrorMessage message={weatherResource.message} />
          )}
          onResolved={() => {
            return <WeatherLayout />;
          }}
          value={weatherResource}
        />
      </form>
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

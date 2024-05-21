import {useContext} from '@builder.io/qwik';

import {WeatherContext} from '~/routes';
import type {WeatherContextType} from '~/routes';

export const useWeather = (query: string) => {
  const weatherContextObj = useContext(WeatherContext) as WeatherContextType;

  try {
    if (query.length < 4) return;

    if (/,\s/.test(query)) {
      alert('space in the name');
      // throw new Error(`Please enter the city name (only) or a zip code.`);
    }

    console.log('calling', query);

    // const resp = await fetch('http://localhost:5173/api/beers', {
    //   signal: controller?.signal,
    // });
    // const json = await resp.json();
    // return json;

    // const res = await fetch(`http://weatherdata.com?city=${query}`, {
    //   signal: abortController.signal,
    // });
    // const data = await res.json();
    // return data as {temp: number};
  } catch (error) {
    weatherContextObj.error = error.message;
  }
};

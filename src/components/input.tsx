import {component$, useContext} from '@builder.io/qwik';

import {WeatherContext} from '~/routes';
import type {WeatherContextType} from '~/routes';

export const Input = component$(() => {
  const weatherContextObj = useContext(WeatherContext) as WeatherContextType;

  return (
    <>
      <input
        type="text"
        onInput$={(e) =>
          (weatherContextObj.query = (e.target as HTMLInputElement).value)
        }
        // placeholder={isLoading ? 'Loading...' : 'City or Zip Code'}
        value={weatherContextObj.query}
      />
    </>
  );
});

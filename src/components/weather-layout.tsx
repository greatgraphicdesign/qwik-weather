import {component$, Fragment, useContext, useSignal} from '@builder.io/qwik';

import {WeatherContext} from '~/routes';

import type {WeatherContextType} from '~/routes';
import type {WeatherTodayType} from '~/types/apis';

export const WeatherLayout = component$(() => {
  const weatherContextObj = useContext(WeatherContext) as WeatherContextType;

  if (!weatherContextObj.forecast || !weatherContextObj.weatherToday) return;

  const {displayLocation, forecast, weatherToday} = weatherContextObj;

  const {
    temperature_2m_max: maxArr,
    temperature_2m_min: minArr,
    time: datesArr,
    weathercode: codesArr,
  } = forecast;

  return (
    <div>
      <h2>{displayLocation}</h2>
      <Day
        code={codesArr[0]}
        date={datesArr[0]}
        isToday={true}
        key={datesArr[0]}
        max={maxArr[0]}
        min={minArr[0]}
        weatherToday={weatherToday}
      />
      <h3>7-Day Forecast</h3>
      <ul class="weather">
        {datesArr.map(
          (date, i) =>
            i !== 0 && (
              <Day
                code={codesArr[i]}
                date={date}
                isToday={false}
                key={date}
                max={maxArr[i]}
                min={minArr[i]}
                weatherToday={weatherToday}
              />
            )
        )}
      </ul>
    </div>
  );
});

export const Day = component$(
  ({
    code,
    date,
    isToday,
    max,
    min,
    weatherToday,
  }: {
    code: number;
    date: string;
    isToday: boolean;
    max: number;
    min: number;
    weatherToday: WeatherTodayType;
  }) => {
    interface hr {
      code: number;
      index: number;
      meridiem: string;
      temp: number;
      time: string;
    }

    let hours: hr[] | [] = [];

    if (isToday) {
      hours = weatherToday.hourly.time
        .map((hour, index) => {
          const hr: hr = {
            code: 0,
            index: 0,
            meridiem: '',
            temp: 0,
            time: '',
          };
          hr.time = new Date(hour).toLocaleTimeString('en', {
            timeStyle: 'short',
            hour12: true,
            timeZone: weatherToday.timezone,
          });
          hr.meridiem = /AM/i.test(hr.time) ? 'AM' : 'PM';
          hr.time = hr.time.replace(/\s(AM|PM)/, '');
          hr.temp = weatherToday.hourly.temperature_2m[index];
          hr.code = weatherToday.hourly.weathercode[index];
          hr.index = index;
          return hr.meridiem.length ? hr : false;
        })
        .filter((hr) => hr !== false) as hr[] | [];
    }

    return (
      <li class={isToday ? 'day today' : 'day'}>
        {isToday ? <p class="today-title">TODAY</p> : ''}
        <span class="icon">{getWeatherIcon(code)}</span>
        <p class="temps">
          <span>{Math.floor(min)}&deg;</span>
          <span class="dash"> &ndash; </span>
          <span>{Math.ceil(max)}&deg;</span>
        </p>
        <p class="stacked">
          <span>{formatDay(`${date + 'T00:00:00'}`)}</span>
          <span>{formatDate(`${date + 'T00:00:00'}`)}</span>
        </p>
        {isToday && hours.length ? (
          <>
            <p id="todayHourly">
              {hours.map((hour) => (
                <Fragment key={hour.index}>
                  <span
                    class="today-hourly-data"
                    id={`i${
                      hour.index > 9 ? hour.index : 0 + hour.index.toString()
                    }`}>
                    <span class="today-code">{getWeatherIcon(hour.code)}</span>
                    <span class="today-temp">{hour.temp}</span>
                    <span class="today-hour">{hour.time}</span>
                    <span class="today-ampm">{hour.meridiem}</span>
                  </span>
                </Fragment>
              ))}
            </p>
            <p id="expandHourlyBtn">
              <button
                onClick$={() => {
                  const pHourly = document.querySelector('#todayHourly');
                  const expandBtn = document.querySelector('#expandHourlyBtn');
                  pHourly?.classList.toggle('expanded');
                  expandBtn?.classList.toggle('expanded');
                }}>
                &#10095;
              </button>
            </p>
          </>
        ) : (
          ''
        )}
      </li>
    );
  }
);

function formatDay(dateStr: string) {
  return new Intl.DateTimeFormat('en', {
    weekday: 'short',
  }).format(new Date(dateStr));
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
  }).format(new Date(dateStr));
}

function getWeatherIcon(wmoCode: number) {
  const icons = new Map([
    [[0], '☀️'],
    [[1], '🌤'],
    [[2], '⛅️'],
    [[3], '☁️'],
    [[45, 48], '🌫'],
    [[51, 56, 61, 66, 80], '🌦'],
    [[53, 55, 63, 65, 57, 67, 81, 82], '🌧'],
    [[71, 73, 75, 77, 85, 86], '🌨'],
    [[95], '🌩'],
    [[96, 99], '⛈'],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return 'NOT FOUND';
  return icons.get(arr);
}

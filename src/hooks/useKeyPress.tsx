import {useTask$, type PropFunction} from '@builder.io/qwik';

export function useKey<T>(
  key: string,
  action: PropFunction<(value: T) => void>
) {
  useTask$(({track, cleanup}) => {
    const keyStr = track(() => key.value);
    function callback(event) {
      if (event.code.toLowerCase() === keyStr.toLowerCase()) {
        action();
      }
    }
    document.addEventListener('keydown', callback);

    cleanup(() => document.removeEventListener('keydown', callback));
  });
}

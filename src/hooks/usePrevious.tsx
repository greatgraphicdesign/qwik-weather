import {useSignal, useTask$} from '@builder.io/qwik';

export const usePrevious = component$(() => {});

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

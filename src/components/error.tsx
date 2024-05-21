import {component$} from '@builder.io/qwik';

export const Error = component$(({message}: {message: string}) => {
  return <p class="error">{message}</p>;
});

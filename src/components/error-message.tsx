import {component$} from '@builder.io/qwik';

export const ErrorMessage = component$(({message}: {message: string}) => {
  return <p class="error">{message}</p>;
});

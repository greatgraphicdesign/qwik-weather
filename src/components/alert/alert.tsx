import {component$, useContext, useStylesScoped$} from '@builder.io/qwik';
import {PortalCloseAPIContextId} from '../../portal-provider';
import AlertCSS from './alert.css?inline';

export interface AlertProps {
  content?: string;
}

// This component is shown as a modal.
export const Alert = component$((props: AlertProps) => {
  useStylesScoped$(AlertCSS);
  // To close a portal retrieve the close API.
  const portalClose = useContext(PortalCloseAPIContextId);
  return (
    <div
      id="alertOverlay"
      onClick$={(event) => {
        const alertContent = document.querySelector('#alertContent');
        if (!alertContent?.contains(event.target as Element)) {
          portalClose();
        }
      }}>
      <div id="alertContent">
        <button class="alertClose" onClick$={() => portalClose()}>
          &#x2715;
        </button>
        <div dangerouslySetInnerHTML={props.content}></div>
      </div>
    </div>
  );
});

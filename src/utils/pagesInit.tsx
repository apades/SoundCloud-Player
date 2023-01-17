import { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import '../style/global.css';

export let reactRender = (
  App: ReactElement,
  dom: Element = document.getElementById('app')
): void => {
  createRoot(dom).render(App);
};

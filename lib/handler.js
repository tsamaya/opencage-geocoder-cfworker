import landing from './landing';
import geocode from './geocode';

/**
 * Fetch and log a request
 * @param {Request} request
 */
const handleRequest = async request => {
  let response;
  if (request.method === 'POST') {
    // response = new Response('Hello worker!', { status: 200 });
    response = await geocode(request);
  } else {
    response = new Response(landing, {
      headers: { 'Content-Type': 'text/html' },
    });
  }
  return response;
};

export default handleRequest;

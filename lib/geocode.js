const geocode = async request => {
  const { q, key } = await request.json();
  const headers = { 'Content-Type': 'application/json' };
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?key=${key}&q=${q}`,
  );
  const data = await response.json();
  return new Response(JSON.stringify(data), { headers });
};

export default geocode;

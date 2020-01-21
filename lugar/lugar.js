const axios = require('axios');

const getLugarLatLng = async dir => {
  const encodeUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
      'x-rapidapi-key': '227b75150fmsh074ca009b0225d1p12fe7fjsna6dd66d279b6',
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
    },
  });

  const resp = await instance.get();
  if (resp.data.Results.lenghth === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return { direccion, lat, lng };
};

module.exports = { getLugarLatLng };

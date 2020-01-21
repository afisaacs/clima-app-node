const axios = require('axios');

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a30f6e84e9510abda2dbae859d4ef7bb&units=metric`
  );
  return resp.data.main.temp;
};

module.exports = { getClima };

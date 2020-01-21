const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const getInfo = async direccion => {
  try {
    const { lat, lng, direccion: nombre } = await getLugarLatLng(direccion);
    const temperatura = await getClima(lat, lng);
    return `El clima de ${nombre} es de ${temperatura}`;
  } catch (error) {
    throw new Error(`No se pudo determinar el clima de ${direccion}`);
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);

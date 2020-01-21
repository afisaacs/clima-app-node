const argv = require('yargs');

argv
  .options({
    direccion: {
      alias: 'd',
      desc: 'Dirección de la ciudad para obtener el clima',
      demand: true,
    },
  })
  .help();

module.exports = argv;

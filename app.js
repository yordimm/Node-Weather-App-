const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async (direccion) => {

    try {
        let coordenadas = await lugar.getLugar(direccion);
        let { temperatura } = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima en ${coordenadas.direccion} es de ${temperatura}`
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}
// lugar.getLugar(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     }).catch(error => console.log(error));

// clima.getClima(3.4516467, -76.5319854)
//     .then(temperatura => {
//         console.log(temperatura);
//     }).catch(error => console.log(error));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
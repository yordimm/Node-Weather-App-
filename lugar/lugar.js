const axios = require('axios');

const getLugar = async (direccion) => {
    let encodedUrl = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`)

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay Resultados para la ciudad ${direccion}`)
    }
    let locationData = respuesta.data.results[0];
    let { formatted_address, geometry } = locationData;
    let { lat, lng } = geometry.location;
    // console.log(JSON.stringify(resp.data, undefined, 2))
    return {
        direccion: formatted_address,
        lat,
        lng
    }
}
module.exports = {
    getLugar
}
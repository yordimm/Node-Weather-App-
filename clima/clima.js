const axios = require('axios');
const getClima = async (lat, lng) => {
    const apiKey = `4e5e4c8a2117d0c4e75a6e8189cf8da6`;
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
    let { temp } = respuesta.data.main;
    return {
        temperatura: temp
    }
}

module.exports = {
    getClima
}
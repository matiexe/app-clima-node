const axios = require('axios');

const getClima = async(lat,long)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=895eb21de7a006b877e261c9e86f2ccb&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
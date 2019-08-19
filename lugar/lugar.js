const axios = require('axios');

const getCoordenadas =async(direccion) =>{
    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers:{'x-rapidapi-key':'8ceb151eadmshc59496a201caeb9p135b82jsncc844f7611ff'}
    });
    
    const resp = await instance.get()
    if(resp.data.Results.length ===0){
        throw new Error(`no hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const long = data.lon;
    return{
        location,
        lat,
        long
    }
}

module.exports = {
    getCoordenadas
}
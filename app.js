const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const getInfo=async(direccion)=>{
    try {
        const coord = await lugar.getCoordenadas(direccion);
        const temp  = await clima.getClima(coord.lat,coord.long);
        return `El clima de ${direccion} es de ${temp} grados`
    } catch (error) {
        `No se pudo encontrar el clima de ${direccion}`
    }
    
}
getInfo(argv.direccion)
.then(console.log)
.catch(console.log)
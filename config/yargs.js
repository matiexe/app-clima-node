const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc:'Direccion de la ciedad para obtener el clima',
        demand:true
    }
}).argv

module.exports = {
    argv
}
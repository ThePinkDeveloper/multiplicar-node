//requireds
const { multiplicar } = require('./multiplicar/multiplicar');

let base = 9;

multiplicar()
    .then((nombreArchivo) => console.log(`Archivo creado: ${nombreArchivo}`))
    .catch((err) => console.log(err));
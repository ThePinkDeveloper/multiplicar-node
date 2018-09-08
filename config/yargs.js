// objeto options
let options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

// requireds
const argv = require('yargs')
    .command('listar', 'Lista la tabla de multiplicar', options)
    .command('crear', 'Crea la tabla de multiplicar en un archiuvo', options)
    .help()
    .argv;

module.exports = {
    argv
}
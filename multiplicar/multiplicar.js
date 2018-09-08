// requireds
const fs = require('fs');
const { argv } = require('../config/yargs');

console.log(argv);

let data = '';
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

let multiplicar = () => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido, ${base} no es un número.`);
            return;
        } else {

            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base * i }\n`;
            }

            switch (comando) {
                case 'listar':
                    console.log(data);
                    break;

                case 'crear':
                    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(`tabla-${base}.txt`);
                        }
                    })
                    break;
                default:
                    console.log('Comando no reconocido');
            }
        }
    });
}


module.exports = {
    multiplicar
}
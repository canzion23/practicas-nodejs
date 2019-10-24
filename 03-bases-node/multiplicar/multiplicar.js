// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = async (base, limite = 10) => {

    console.log('===================================');
    console.log(`tabla del ${ base}`.green);
    console.log('===================================');
    

    for ( let i= 1; i<=limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }
};

// Promesa 
let crearArchivo = async (base, limite) => {

        let data = '';
        let NombreArchivo = '';

        //return new Promise((resolve, reject) => {    

        for ( let i= 1; i<=limite; i++) {
            data += `${ base } * ${ i } = ${ base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                //reject (err);
                throw new Error (`Error en la funcion Async ${ err }`);
            }else {
                //resolve(`tabla-${ base }.txt`);
                NombreArchivo = `tabla-${ base }.txt`;
                //console.log(`El nombre del archivo es: ${ NombreArchivo}`);
            }
        });

        return `tabla-${ base }.txt`;

        //});
};


module.exports = {
    crearArchivo,
    listarTabla
};


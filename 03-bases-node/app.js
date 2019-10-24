
// Aplicando la destructuración de archivos puedo traer explicitamente las funciones o metodos que tiene el modulo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');


let obtenerArchivo = async ( base, limite ) => {
    let resp = await crearArchivo(base, limite);

    return `${ resp }`;
};

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        obtenerArchivo(argv.base, argv.limite)
        .then( mensaje => console.log(`Archivo creado: ${ mensaje }`.rainbow) )
        .catch( e => console.log('Error description:', e));

        break;
    default:
        console.log('Comando no reconocido');            
        break;
}

// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);
// console.log('Liminte', argv.limite);





 
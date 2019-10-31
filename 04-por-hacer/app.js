// requires
const colors = require('colors');
// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


//console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('================= Por Hacer ================'.green);
            console.log(tarea.descripcion);
            // Dependiendo del estado de la propiedad "compeltado", se pinta de verde o rojo el status.
            if (tarea.completado) {
                console.log(`Estado: ${tarea.completado}`.green);
            } else {
                console.log(`Estado: ${tarea.completado}`.red);
            }
            console.log('============================================'.green);
        }
        break;

    case 'actualizar':

        let actualizdo = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log("TCL: actualizdo", actualizdo);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log('Comando no es reconocido');
        break;
}

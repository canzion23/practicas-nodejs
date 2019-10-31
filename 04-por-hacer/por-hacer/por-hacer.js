const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) {
            //reject(err);
            throw new Error('No se pudo grabar la tarea', err);
        }
    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];

    }
};

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

};

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    /* Aca se realiza esta asignación, debido a que cuando solo se actualiza el objeto con el paramentro enviado
       a traves de los compandos en consola, la opcion de completado se almacena como string, y debido a esto
       cuando se evalua la propiedad completado, no se resuelve boleanamente el estatus

    */
    isTrueSet = (completado === 'true'); // Esto devuelve true o false

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = isTrueSet; // se asigna el valor booleano a la propiedad
        guardarDB();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log("TCL: borrar -> index", index);

    if (index >= 0) {

        // Borramos el elemento en la posición index que coincide con la descripción enviada
        // como parametro
        listadoPorHacer.splice(index, 1);
        guardarDB();

        return true;

    } else {

        return false;

    }

    /* Esta es otra manera de hacerlo, con la función filter de los arreglos de JS */

    // let nuevoListado = listadoPorHacer.filter(tarea => {
    //     return tarea.descripcion !== descripcion;
    // });

    // if (listadoPorHacer.length === nuevoListado.length) {
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarDB();
    //     return true;
    // }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};

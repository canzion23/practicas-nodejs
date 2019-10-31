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

    isTrueSet = (completado === 'true');

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = isTrueSet;
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
        let x, y;

        x = listadoPorHacer.length;

        listadoPorHacer.splice(index, 1);

        y = listadoPorHacer.length;
        guardarDB();
        return true;
    } else {
        return false;
    }

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

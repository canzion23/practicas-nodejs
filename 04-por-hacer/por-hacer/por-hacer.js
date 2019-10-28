const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) {
            //reject(err);
            throw new Error('No se pudo grabar la tarea', err);
        } else {
            //resolve(`La tarea fue agregada al archivo`);
            console.log("TCL: guardarDB -> La tarea fue agregada al archivo");
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

const crear = descripcion => {

    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

module.exports = {
    crear
};

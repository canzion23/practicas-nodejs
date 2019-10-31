// requireds
const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la tarea por hacer"
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completado o pendiente la tarea"
};


const argv = require("yargs")
  .command("crear", "Crea una nueva tarea por hacer.", {
    descripcion
  })
  .command("actualizar", "Actualiza una tarea en su avance a completado", {
    descripcion,
    completado
  })
  .command("borrar", "Borra de la lista de tareas por hacer el elemento indicado", {
    descripcion
  })
  .help().argv;

module.exports = {
  argv
};

// requireds
const argv = require("yargs")
  .command("crear", "Crea una nueva tarea por hacer.", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripción de la tarea por hacer"
    }
  })
  .command("actualizar", "Actualiza una tarea en su avance a completado", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripción de la tarea por hacer"
    },
    completado: {
      alias: "c",
      default: true,
      desc: "Marca como completado o pendiente la tarea"
    }
  })
  .help().argv;

module.exports = {
  argv
};

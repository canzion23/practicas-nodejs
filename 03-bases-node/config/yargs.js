const opts = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};

// requireds
const argv = require("yargs")
  .command(
    "listar",
    "Imprime en consola la tabla de multiplicar de la base recibida como parámetro.",
    opts
  )
  .command(
    "crear",
    "Imprime en un archivo la tabla de multiplicar de la base recibida como parámetro hasta el limite.",
    opts
  )
  .help().argv;

module.exports = {
  argv
};


let descripcion = {
  descripcion: {
    alias: 'd',
    demand: true
  }
}

const argv = require('yargs')
  .command('crear', 'crear tareas', descripcion)
  .command('actualizar', 'actualizar tarea', {
    descripcion: {
      alias: 'd',
      demand: true
    },
    completado: {
      alias: 'c',
      default: true
    }
  })
  .command('borrar', 'borrar tarea', descripcion)
  .help().argv

module.exports = {
  argv
}

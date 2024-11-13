// Yargs 

//biblioteca que facilita la creación de interfaces de línea de comandos (CLI) en Node.js. Al crear un programa de línea de comandos, se necesita procesar los argumentos que el usuario ingresa para ejecutar ciertas acciones. Yargs permite capturar y manejar estos argumentos de manera sencilla y estructurada, sin tener que escribir lógica compleja.

// Buenas Prácticas en Yargs
// Definir comandos claramente: Asegúrate de que cada comando tenga un propósito único y claro.
// Utilizar descripciones detalladas: Agregar descripciones a los comandos y argumentos facilita el uso de la CLI para otros usuarios.
// Validar argumentos: Define demandOption para los argumentos obligatorios.
// Mantener el código modular: Si tu programa crece, divide los comandos y handlers en archivos separados y utilízalos en el archivo principal.



//npm install yargs

// const yargs = require('yargs');
//definicion de comandos yargs
// yargs.command({
//     command: 'saludar',
//     describe: 'Imprime un saludo en la consola',
//     builder: {
//         nombre: {
//             describe: 'Nombre de la persona a saludar',
//             demandOption: true, // obliga a que se pase el argumento
//             type: 'string'
//         }
//     },
//     handler: (argv) => {
//         console.log(`Hola, ${argv.nombre}!`);
//     }

// });
//en la terminal node app.js saludar --nombre="Juan"


//-----------------------------------------------------------------
const yargs = require('yargs');
const fs = require('fs');
const archivoTareas = 'tareas.json';


leerTareas = () => {
    try {
        const data = fs.readFileSync(archivoTareas);
        const dataJSON = data.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        // Si no existe el archivo, devuelve un array vacío
        return [];
    }
};
// console.log(leerTareas())

//Funcion auxiliar para guardar tareas:
const guardarTareas = (tareas) => {
    const dataJSON = JSON.stringify(tareas, null, 2);
    fs.writeFileSync(archivoTareas, dataJSON)
}

yargs.command({
    command: 'agregar',
    describe: 'Agrega una nueva tarea',
    builder: {
        titulo: {
            describe: 'Titulo de la tarea',
            demandOption: true,
            type: 'string'
        },
        descripcion: {
            describe: 'Descripcion de la tarea',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const tareas = leerTareas()
        const nuevaTarea = {
            titulo: argv.titulo,
            descripcion: argv.descripcion
        }
        tareas.push(nuevaTarea)
        guardarTareas(tareas)

        console.log(`Nueva tarea agregada: ${argv.titulo} - ${argv.descripcion}`);
    }

});//node app.js agregar --titulo="Aprender Yargs" --descripcion="Estudiar cómo funciona Yargs en Node.js"


yargs.command({
    command: 'listar',
    describe: 'Muestra todas las tareas',

    handler: () => {
        todasTareas = leerTareas()
        for (let i = 0; i < todasTareas.length; i++) {
            console.log(`Tarea: ${todasTareas[i].titulo} Descripción: ${todasTareas[i].descripcion}`)
        }
        // console.log(leerTareas())
    }

});//node app.js listar 

yargs.command({
    command: 'eliminar',
    describe: 'Elimina una tarea',
    builder: {
        titulo: {
            describe: 'Titulo de la tarea a eliminar',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const tareas = leerTareas();
        const tareasActualizadas = tareas.filter(tarea => tarea.titulo !== argv.titulo);

        if (tareas.length > tareasActualizadas.length) {
            guardarTareas(tareasActualizadas);
            console.log(`Tarea eliminada: ${argv.titulo}`);
        } else {
            console.log(`Tarea no encontrada: ${argv.titulo}`);
        }
    }
});    //node app.js eliminar --titulo="Aprender Yargs" 



yargs.command({
  command: 'actualizar',
  describe: 'Actualiza una tarea existente',
  builder: {
    titulo: {
      describe: 'Título de la tarea a actualizar',
      demandOption: true,
      type: 'string'
    },
    nuevaDescripcion: {
      describe: 'Nueva descripción de la tarea',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    const tareas = leerTareas();
    const indice = tareas.findIndex(tarea => tarea.titulo === argv.titulo);

    if (indice !== -1) {
      tareas[indice].descripcion = argv.nuevaDescripcion;
      guardarTareas(tareas);
      console.log(`Tarea actualizada: ${argv.titulo} - ${argv.nuevaDescripcion}`);
    } else {
      console.log(`Tarea no encontrada: ${argv.titulo}`);
    }
  }
});  //node app.js actualizar --titulo="Aprender Yargs" --nuevaDescripcion="ya estudiamos como funciona Yargs en Node.js"



yargs.parse();

// Ejercicios para Practicar con Yargs

// Ejercicio 1: Sistema de Contactos
// Crea un programa que gestione una lista de contactos.
// Implementa los comandos agregar (nombre, teléfono), listar y eliminar (nombre).
// Al agregar o eliminar, se debe mostrar un mensaje confirmando la acción.

// Ejercicio 2: Gestión de Inventario
// Crea una CLI que administre un inventario de productos.
// Agrega los comandos agregarProducto (nombre, cantidad, precio), listarProductos, actualizarProducto (nombre, cantidad, precio) y eliminarProducto (nombre).
// Cada acción debe imprimir en la consola un resumen de lo realizado.

// Ejercicio 3: Calculadora de Operaciones Básicas
// Implementa una calculadora en CLI con los comandos sumar, restar, multiplicar y dividir.
// Cada comando debe aceptar dos argumentos: num1 y num2.
// Muestra el resultado de la operación en la consola.

// Ejercicio 4: Lista de Tareas con Estado
// Crea una CLI para gestionar una lista de tareas donde cada tarea tiene un título, una descripción y un estado (pendiente o completada).
// Implementa los comandos agregarTarea, listarTareas, marcarCompletada (título) y eliminarTarea.
// Al listar, muestra las tareas en orden de creación y su estado.

// Ejercicio 5: Historial de Comandos
// Crea una CLI que registre cada comando que se ejecuta en un archivo historial.json.
// Cada vez que se ejecute un comando, registra el comando y la fecha en el archivo.
// Implementa un comando verHistorial que muestre todos los comandos ejecutados hasta el momento.

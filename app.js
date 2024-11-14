// // Yargs 

// //biblioteca que facilita la creación de interfaces de línea de comandos (CLI) en Node.js. Al crear un programa de línea de comandos, se necesita procesar los argumentos que el usuario ingresa para ejecutar ciertas acciones. Yargs permite capturar y manejar estos argumentos de manera sencilla y estructurada, sin tener que escribir lógica compleja.

// // Buenas Prácticas en Yargs
// // Definir comandos claramente: Asegúrate de que cada comando tenga un propósito único y claro.
// // Utilizar descripciones detalladas: Agregar descripciones a los comandos y argumentos facilita el uso de la CLI para otros usuarios.
// // Validar argumentos: Define demandOption para los argumentos obligatorios.
// // Mantener el código modular: Si tu programa crece, divide los comandos y handlers en archivos separados y utilízalos en el archivo principal.



// //npm install yargs

// // const yargs = require('yargs');
// //definicion de comandos yargs
// // yargs.command({
// //     command: 'saludar',
// //     describe: 'Imprime un saludo en la consola',
// //     builder: {
// //         nombre: {
// //             describe: 'Nombre de la persona a saludar',
// //             demandOption: true, // obliga a que se pase el argumento
// //             type: 'string'
// //         }
// //     },
// //     handler: (argv) => {
// //         console.log(`Hola, ${argv.nombre}!`);
// //     }

// // });
// //en la terminal node app.js saludar --nombre="Juan"


// //-----------------------------------------------------------------
// const yargs = require('yargs');
// const fs = require('fs');
// const archivoTareas = 'tareas.json';


// leerTareas = () => {
//     try {
//         const data = fs.readFileSync(archivoTareas);
//         const dataJSON = data.toString();
//         return JSON.parse(dataJSON);
//     } catch (e) {
//         // Si no existe el archivo, devuelve un array vacío
//         return [];
//     }
// };
// // console.log(leerTareas())

// //Funcion auxiliar para guardar tareas:
// const guardarTareas = (tareas) => {
//     const dataJSON = JSON.stringify(tareas, null, 2);
//     fs.writeFileSync(archivoTareas, dataJSON)
// }

// yargs.command({
//     command: 'agregar',
//     describe: 'Agrega una nueva tarea',
//     builder: {
//         titulo: {
//             describe: 'Titulo de la tarea',
//             demandOption: true,
//             type: 'string'
//         },
//         descripcion: {
//             describe: 'Descripcion de la tarea',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: (argv) => {
//         const tareas = leerTareas()
//         const nuevaTarea = {
//             titulo: argv.titulo,
//             descripcion: argv.descripcion
//         }
//         tareas.push(nuevaTarea)
//         guardarTareas(tareas)

//         console.log(`Nueva tarea agregada: ${argv.titulo} - ${argv.descripcion}`);
//     }

// });//node app.js agregar --titulo="Aprender Yargs" --descripcion="Estudiar cómo funciona Yargs en Node.js"


// yargs.command({
//     command: 'listar',
//     describe: 'Muestra todas las tareas',

//     handler: () => {
//         todasTareas = leerTareas()
//         for (let i = 0; i < todasTareas.length; i++) {
//             console.log(`Tarea: ${todasTareas[i].titulo} Descripción: ${todasTareas[i].descripcion}`)
//         }
//         // console.log(leerTareas())
//     }

// });//node app.js listar 

// yargs.command({
//     command: 'eliminar',
//     describe: 'Elimina una tarea',
//     builder: {
//         titulo: {
//             describe: 'Titulo de la tarea a eliminar',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: (argv) => {
//         const tareas = leerTareas();
//         const tareasActualizadas = tareas.filter(tarea => tarea.titulo !== argv.titulo);

//         if (tareas.length > tareasActualizadas.length) {
//             guardarTareas(tareasActualizadas);
//             console.log(`Tarea eliminada: ${argv.titulo}`);
//         } else {
//             console.log(`Tarea no encontrada: ${argv.titulo}`);
//         }
//     }
// });    //node app.js eliminar --titulo="Aprender Yargs" 



// yargs.command({
//   command: 'actualizar',
//   describe: 'Actualiza una tarea existente',
//   builder: {
//     titulo: {
//       describe: 'Título de la tarea a actualizar',
//       demandOption: true,
//       type: 'string'
//     },
//     nuevaDescripcion: {
//       describe: 'Nueva descripción de la tarea',
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: (argv) => {
//     const tareas = leerTareas();
//     const indice = tareas.findIndex(tarea => tarea.titulo === argv.titulo);

//     if (indice !== -1) {
//       tareas[indice].descripcion = argv.nuevaDescripcion;
//       guardarTareas(tareas);
//       console.log(`Tarea actualizada: ${argv.titulo} - ${argv.nuevaDescripcion}`);
//     } else {
//       console.log(`Tarea no encontrada: ${argv.titulo}`);
//     }
//   }
// });  //node app.js actualizar --titulo="Aprender Yargs" --nuevaDescripcion="ya estudiamos como funciona Yargs en Node.js"



// yargs.parse();

// // Ejercicios para Practicar con Yargs

// // Ejercicio 1: Sistema de Contactos
// // Crea un programa que gestione una lista de contactos.
// // Implementa los comandos agregar (nombre, teléfono), listar y eliminar (nombre).
// // Al agregar o eliminar, se debe mostrar un mensaje confirmando la acción.

//autor Juan Jara
// const yargs = require('yargs');
// const fs = require('fs');
// const archivoContactos = "contactos.json"
 
// const leerContactos = () => {
//   try {
//     const data = fs.readFileSync(archivoContactos)
//     const dataJSON = data.toString()
//     return JSON.parse(dataJSON)
//   } catch (e) {
//     return []
//   }
// }
 
// const guardarContactos = (contactos) => {
//   const dataJSON = JSON.stringify(contactos, null, 2)
//   fs.writeFileSync(archivoContactos, dataJSON)
// }
 
// yargs.command({
//   command: "agregar",
//   describe: "Agregar un nuevo contacto",
//   builder: {
//     nombre: {
//       describe: "Nombre del contacto",
//       demandOption: true,
//       type: "string",
//     },
//     telefono: {
//       describe: "Teléfono del contacto",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler(argv) {
//     const contactos = leerContactos()
//     contactos.push({ nombre: argv.nombre, telefono: argv.telefono })
//     guardarContactos(contactos)
//     console.log(`Contacto agregado: ${argv.nombre}`)
//   },
// })
 
// yargs.command({
//   command: "listar",
//   describe: "Listar todos los contactos",
//   handler() {
//     const contactos = leerContactos()
//     for (let i = 0; i < contactos.length; i++) {
//       console.log(
//         `Tarea: ${contactos[i].titulo} Descripción: ${contactos[i].descripcion}`
//       )
//     }
//     // console.log("Lista de contactos:", contactos)
//   },
// })
 
// yargs.command({
//   command: "eliminar",
//   describe: "Eliminar un contacto",
//   builder: {
//     nombre: {
//       describe: "Nombre del contacto",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler(argv) {
//     const contactos = leerContactos()
//     const contactosActualizados = contactos.filter(
//       (contacto) => contacto.nombre !== argv.nombre
//     )
//     guardarContactos(contactosActualizados)
//     console.log(`Contacto eliminado: ${argv.nombre}`)
//   },
// })
 
// yargs.parse()
 




// Ejercicio 2: Gestión de Inventario
// Crea una CLI que administre un inventario de productos.
// Agrega los comandos agregarProducto (nombre, cantidad, precio), listarProductos, actualizarProducto (nombre, cantidad, precio) y eliminarProducto (nombre).
// Cada acción debe imprimir en la consola un resumen de lo realizado.
// const fs = require('fs');
// const yargs = require('yargs');

// const archivoInventario = 'inventario.json';

// const leerInventario = () => {
//   try {
//     const data = fs.readFileSync(archivoInventario);
//     return JSON.parse(data);
//   } catch (e) {
//     return [];
//   }
// };

// const guardarInventario = (inventario) => {
//   fs.writeFileSync(archivoInventario, JSON.stringify(inventario, null, 2));
// };

// yargs.command({
//   command: 'agregarProducto',
//   describe: 'Agrega un nuevo producto al inventario',
//   builder: {
//     nombre: { describe: 'Nombre del producto', demandOption: true, type: 'string' },
//     cantidad: { describe: 'Cantidad del producto', demandOption: true, type: 'number' },
//     precio: { describe: 'Precio del producto', demandOption: true, type: 'number' }
//   },
//   handler: (argv) => {
//     const inventario = leerInventario();
//     let nuevo = { nombre: argv.nombre, cantidad: argv.cantidad, precio: argv.precio }
//     inventario.push(nuevo);
//     guardarInventario(inventario);
//     console.log(`Producto agregado: ${argv.nombre}`);
//   }
// });

// yargs.command({
//   command: 'listarProductos',
//   describe: 'Lista todos los productos del inventario',
//   handler: () => {
//     const inventario = leerInventario();
//     inventario.forEach(producto => console.log(`${producto.nombre} - ${producto.cantidad} unidades - $${producto.precio}`));
//   }
// });

// yargs.command({
//   command: 'actualizarProducto',
//   describe: 'Actualiza un producto en el inventario',
//   builder: {
//     nombre: { describe: 'Nombre del producto', demandOption: true, type: 'string' },
//     cantidad: { describe: 'Nueva cantidad del producto', type: 'number' },
//     precio: { describe: 'Nuevo precio del producto', type: 'number' }
//   },
//   handler: (argv) => {
//     const inventario = leerInventario();
//     const producto = inventario.find(p => p.nombre === argv.nombre);
//     if (producto) {
//       producto.cantidad = argv.cantidad !== undefined ? argv.cantidad : producto.cantidad;
//       producto.precio = argv.precio !== undefined ? argv.precio : producto.precio;
//       guardarInventario(inventario);
//       console.log(`Producto actualizado: ${argv.nombre}`);
//     } else {
//       console.log('Producto no encontrado');
//     }
//   }
// });

// yargs.command({
//   command: 'eliminarProducto',
//   describe: 'Elimina un producto del inventario',
//   builder: {
//     nombre: { describe: 'Nombre del producto a eliminar', demandOption: true, type: 'string' }
//   },
//   handler: (argv) => {
//     const inventario = leerInventario();
//     const inventarioActualizado = inventario.filter(p => p.nombre !== argv.nombre);
//     guardarInventario(inventarioActualizado);
//     console.log(`Producto eliminado: ${argv.nombre}`);
//   }
// });

// yargs.parse();


// Ejercicio 3: Calculadora de Operaciones Básicas
// Implementa una calculadora en CLI con los comandos sumar, restar, multiplicar y dividir.
// Cada comando debe aceptar dos argumentos: num1 y num2.
// Muestra el resultado de la operación en la consola.
// const yargs = require('yargs');

// yargs.command({
//   command: 'sumar',
//   describe: 'Suma dos números',
//   builder: {
//     num1: { describe: 'Primer número', demandOption: true, type: 'number' },
//     num2: { describe: 'Segundo número', demandOption: true, type: 'number' }
//   },
//   handler: (argv) => {
//     let resultado = argv.num1 + argv.num2
//     console.log(`Resultado: ${resultado}`);
//   }
// });

// yargs.command({
//   command: 'restar',
//   describe: 'Resta dos números',
//   builder: {
//     num1: { describe: 'Primer número', demandOption: true, type: 'number' },
//     num2: { describe: 'Segundo número', demandOption: true, type: 'number' }
//   },
//   handler: (argv) => {
//     console.log(`Resultado: ${argv.num1 - argv.num2}`);
//   }
// });

// yargs.command({
//   command: 'multiplicar',
//   describe: 'Multiplica dos números',
//   builder: {
//     num1: { describe: 'Primer número', demandOption: true, type: 'number' },
//     num2: { describe: 'Segundo número', demandOption: true, type: 'number' }
//   },
//   handler: (argv) => {
//     console.log(`Resultado: ${argv.num1 * argv.num2}`);
//   }
// });

// yargs.command({
//   command: 'dividir',
//   describe: 'Divide dos números',
//   builder: {
//     num1: { describe: 'Primer número', demandOption: true, type: 'number' },
//     num2: { describe: 'Segundo número', demandOption: true, type: 'number' }
//   },
//   handler: (argv) => {
//     if (argv.num2 === 0) {
//       console.log('No se puede dividir por cero');
//     } else {
//       console.log(`Resultado: ${argv.num1 / argv.num2}`);
//     }
//   }
// });

// yargs.parse();


// Ejercicio 4: Lista de Tareas con Estado
// Crea una CLI para gestionar una lista de tareas donde cada tarea tiene un título, una descripción y un estado (pendiente o completada).
// Implementa los comandos agregarTarea, listarTareas, marcarCompletada (título) y eliminarTarea.
// Al listar, muestra las tareas en orden de creación y su estado.
// const fs = require('fs');
// const yargs = require('yargs');

// const archivoTareas = 'tareas.json';

// // Leer las tareas
// const leerTareas = () => {
//   try {
//     const data = fs.readFileSync(archivoTareas);
//     return JSON.parse(data);
//   } catch (e) {
//     return [];
//   }
// };

// // Guardar las tareas
// const guardarTareas = (tareas) => {
//   fs.writeFileSync(archivoTareas, JSON.stringify(tareas, null, 2));
// };

// // Comando para agregar una tarea
// yargs.command({
//   command: 'agregarTarea',
//   describe: 'Agrega una nueva tarea',
//   builder: {
//     titulo: { describe: 'Título de la tarea', demandOption: true, type: 'string' },
//     descripcion: { describe: 'Descripción de la tarea', demandOption: true, type: 'string' }
//   },
//   handler: (argv) => {
//     const tareas = leerTareas();
//     tareas.push({ titulo: argv.titulo, descripcion: argv.descripcion, estado: 'pendiente' });
//     guardarTareas(tareas);
//     console.log(`Tarea agregada: ${argv.titulo}`);
//   }
// });

// // Comando para listar todas las tareas
// yargs.command({
//   command: 'listarTareas',
//   describe: 'Lista todas las tareas',
//   handler: () => {
//     const tareas = leerTareas();
//     console.log('Lista de tareas:');
//     tareas.forEach((tarea, index) => {
//       console.log(`${index + 1}. ${tarea.titulo} - ${tarea.descripcion} [${tarea.estado}]`);
//     });
//   }
// });

// // Comando para marcar una tarea como completada
// yargs.command({
//   command: 'marcarCompletada',
//   describe: 'Marca una tarea como completada',
//   builder: {
//     titulo: { describe: 'Título de la tarea a marcar como completada', demandOption: true, type: 'string' }
//   },
//   handler: (argv) => {
//     const tareas = leerTareas();
//     const tarea = tareas.find(t => t.titulo === argv.titulo);
//     if (tarea) {
//       tarea.estado = 'completada';
//       guardarTareas(tareas);
//       console.log(`Tarea marcada como completada: ${argv.titulo}`);
//     } else {
//       console.log('Tarea no encontrada');
//     }
//   }
// });

// // Comando para eliminar una tarea
// yargs.command({
//   command: 'eliminarTarea',
//   describe: 'Elimina una tarea',
//   builder: {
//     titulo: { describe: 'Título de la tarea a eliminar', demandOption: true, type: 'string' }
//   },
//   handler: (argv) => {
//     const tareas = leerTareas();
//     const tareasActualizadas = tareas.filter(t => t.titulo !== argv.titulo);
//     guardarTareas(tareasActualizadas);
//     console.log(`Tarea eliminada: ${argv.titulo}`);
//   }
// });

// yargs.parse();


// Ejercicio 5: Historial de Comandos
// Crea una CLI que registre cada comando que se ejecuta en un archivo historial.json.
// Cada vez que se ejecute un comando, registra el comando y la fecha en el archivo.
// Implementa un comando verHistorial que muestre todos los comandos ejecutados hasta el momento.


// const fs = require('fs');
// const yargs = require('yargs');

// const archivoHistorial = 'historial.json';

// // Leer el historial de comandos
// const leerHistorial = () => {
//   try {
//     const data = fs.readFileSync(archivoHistorial);
//     return JSON.parse(data);
//   } catch (e) {
//     return [];
//   }
// };

// // Guardar un nuevo comando en el historial
// const registrarComando = (comando) => {
//   const historial = leerHistorial();
//   historial.push({ comando, fecha: new Date().toISOString() });
//   fs.writeFileSync(archivoHistorial, JSON.stringify(historial, null, 2));
// };

// // Comando para ver el historial de comandos ejecutados
// yargs.command({
//   command: 'verHistorial',
//   describe: 'Muestra el historial de comandos ejecutados',
//   handler: () => {
//     const historial = leerHistorial();
//     console.log('Historial de comandos:');
//     historial.forEach(entry => {
//       console.log(`Comando: ${entry.comando}, Fecha: ${entry.fecha}`);
//     });
//   }
// });

// Registrar el comando ejecutado en cada llamada
// yargs.parse();
// registrarComando(process.argv.slice(2).join(' '));

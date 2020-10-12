// Funciones en JS


/* 
  No se aconseja declarar las funciones de esta forma,
  porque se puede cometer errores como los siguientes:
*/
// function saludar(nombre){
//   return `Hola, ${nombre}`;
// }

// console.log(saludar); 
/* Salida: error porque retorna la misma función
  ƒ saludar(nombre) {
    return `Hola, ${nombre}`;
  }
*/

// console.log(saludar()); // Hola, undefined
/* Salida: error porque no se le envía un parámetro en nombre
  Hola, undefined
*/

// saludar = 30;

// console.log(saludar);
/* Salida: error porque se le asigno 30 a saludar, siendo que 
saludar es una función y no una variable.
30
*/

/* 
Se aconseja declarar las funciones de esta forma,
porque no se puede modificar la función
*/
// const saludar = function(nombre) {
//   return `Hola, ${nombre}`; 
// }

// /*
//   Al hacer esto ya nos presenta un error la consola.
// */
// // saludar = 30;

// console.log(saludar());

// Funciones flecha
const saludar1 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;
const saludar3 = () => `Hola Mundo`;

console.log(saludar1('Oscar'));
console.log(saludar2('Gabo'));
console.log(saludar3());

// otro ejemplo
const getUser = () => ({
  uid: 'ABC123',
  username: 'nacho'
})

const user = getUser();
console.table(user);


// Tarea
// 1. Transformar a una función de Flecha.
// 2. Tiene que retornar un objeto implícito.
// 3. Pruebas.
// function getUsuarioActivo(nombre) {
//   return {
//     uid: 'ABC123',
//     username: nombre
//   }
// };

// const usuarioActivo = getUsuarioActivo('Oscar')
// console.log(usuarioActivo);

// desarrollo tarea
const getUsuarioActivo = (nombre) => ({
  uid: 'ABC123',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Oscar')
console.log(usuarioActivo);
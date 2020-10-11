// Variables y Constantes

/*
  Ya no se usa var para la declaración de variables, en su reemplazo, usar const y let:

  const para variables que no van a modificar su valor.
  Let para variables que pueden modificar su valor.

  Las const y let que se declaren viven dentro de su scope:
*/

const nombre = 'Oscar';
const apellido = 'Osses';

let valorDado = 5;
valorDado = 4;

if (true) {
	const nombre = 'Gabriel';
	console.log(nombre); // Gabriel
}

console.log(valorDado); // 4
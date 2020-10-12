const nombre = 'Oscar';
const apellido = 'Osses';

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = 'Gabriel') {
  return 'Hola ' + nombre
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`);
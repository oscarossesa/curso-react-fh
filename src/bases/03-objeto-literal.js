const persona = {
  nombre: 'Oscar',
  apellido: 'Osses',
  edad: 33,
  direccion: {
    ciudad: 'Santiago',
    zip: 4235345345,
    lat: 14.123123,
    lng: 34.234234
  }
}

console.log(persona); // al imprimirlo así el objeto no tiene un nombre.
// console.log({ persona }); // aquí el objeto toma el nombre de "persona".
// console.table({ persona }); // aquí imprimimos el objeto como tabla.

/*
  Esto no se debe hacer, ya que no esta generando un clone del
  objeto.
*/
const persona2 = persona; 

// se modifica el nombre del objeto inicial, no el de la copia.  
persona2.nombre = 'Gabriel' 

/*
  Hay que tener cuidado al hacer esto, ya que si se quiere
  modificar una nueva instancia sería de esta manera:
*/
const persona3 = { ...persona }
persona3.nombre = 'Juan' 
console.log(persona3);

console.log(persona2); // al imprimirlo así el objeto no tiene un nombre.

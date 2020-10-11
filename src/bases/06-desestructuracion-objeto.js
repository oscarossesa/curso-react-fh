// Destructuración

const persona = {
  nombre: 'Oscar',
  edad: 33,
  clave: 'bla'
}

// // así imprimiriamos cada una de las propiedades del objeto.
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// // así sería con destructuración.
// const { nombre, edad, clave } = persona;

// console.log( nombre);
// console.log( edad);
// console.log( clave);

/*
  la destructuración también se puede hacer en funciones.
  también acepta parámetros por defecto, como es rango.
*/
// const retornaPersona = ({ nombre, edad, rango = 'Capitán' }) => {
//   console.log(nombre, edad, rango);
// };

// retornaPersona(persona);


/*
  Otro tipo de destructuración.
*/
// const useContext = ({ nombre, edad, rango = 'Capitán', clave }) => {
//   return {
//     nombreClave: clave,
//     anios: edad
//   }
// };

// const { nombreClave, anios } = useContext(persona);
// console.log(nombreClave, anios);


/*
  Destructuración anidada.
*/
const useContext = ({ nombre, edad, rango = 'Capitán', clave }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1231,
      lng: 34.3467
    }
  }
};

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
console.log(nombreClave, anios, lat, lng);
// Desestructuración de arreglos.

// const personajes = ['Goku', 'Vegeta', 'Tunks'];
// const [ , , p3] = personajes;
// console.log(p3);

// const retornaArreglo = () => ['ABC', 123];


// const arr = retornaArreglo();
// console.log(arr);

// // si necesito extraer los elementos del array:

// const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

// Tarea
const useState = (valor) => {
  return [valor, () => { console.log('Hola Mundo'); }]
}

// const arr = useState('Goku')
// console.log(arr[1]());v

// arr[1]();

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre()
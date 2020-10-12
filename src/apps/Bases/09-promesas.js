import { 
  getHeroeById
} from './bases/08-imports-exports'

// const promesa = new Promise((resolve, reject) => {
//   // resolve: se ejecuta cuando la promesa termina exitosamente.
//   // reject: se ejecuta cuando la promesa falla.
//   setTimeout(() => {
//     // Tarea
//     const heroe = getHeroeById(1);
//     resolve(heroe);
//     // reject('No se puedo encontrar el héroe')
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log('Then de la promesa');
//   console.log(heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
    // resolve: se ejecuta cuando la promesa termina exitosamente.
    // reject: se ejecuta cuando la promesa falla.
    setTimeout(() => {
      // Tarea
      const heroe = getHeroeById(1);
      (heroe !== undefined) ? resolve(heroe) : reject('No se puedo encontrar el héroe');
    }, 2000);
  });
}

getHeroeByIdAsync(3)
  .then(console.log)
  .catch(console.warn);
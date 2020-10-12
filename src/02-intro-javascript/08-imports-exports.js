// 20. Import, export y funcionales comunes de arreglos.
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(heroes);
// console.log(owners);

// tarea find
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

// console.log(getHeroeById(1));

// tarea filter
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroeByOwner('DC'));
// console.log(getHeroeByOwner('Marvel'));
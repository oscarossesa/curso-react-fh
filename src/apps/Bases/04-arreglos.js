// Arreglos en JS

// const arreglo = new Array(); // no hacer, declarar así: []

// const arreglo = new Array(100);
// arreglo.push(1) // arreglo con 101 posiciones

// console.log(arreglo);

const arreglo = [];
arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ];
// arreglo2.push(5);

/*
  El método map() crea un nuevo array con los resultados 
  de la llamada a la función indicada aplicados a cada 
  uno de sus elementos.
*/
const arreglo3 = arreglo2.map(function(numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3); // arreglo3 es un nuevo objeto.
import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './apps/PrimeraApp/PrimeraApp';
// import CounterApp from './apps/CounterApp/CounterApp';
// import GifExpertApp from './apps/GifExpertApp/GifExpertApp';
import HooksApp from './apps/HooksApp/HooksApp';


const divRoot = document.querySelector('#root'); 

/*
  Esta aplicación esta compuesta por distintas aplicaciones que fueron
  construidas a lo largo del curso React: De cero a experto de Fernando
  Herrera en Udemy.

  Para usarla, descomentar la aplicación deseada con su respectivo 
  import.
*/

/*
  Primera Aplicación: PrimeraApp
*/
// ReactDOM.render(<PrimeraApp saludo="Hola, Oscar" />, divRoot);

/*
  Tercera Aplicación: CounterApp
*/
// ReactDOM.render(<CounterApp value={10} />, divRoot);

/*
  Tercera Aplicación: GifExpertApp
*/
// ReactDOM.render(<GifExpertApp />, divRoot);

/*
  Cuarta Aplicación: HooksApp
*/
ReactDOM.render(<HooksApp />, divRoot);
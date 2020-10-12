import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './01-intro-react/PrimeraApp';
// import CounterApp from './03-counter-app/CounterApp';
// import GifExpertApp from './04-gif-expert-app/GifExpertApp';
// import HooksApp from './05-hooks-app/HooksApp';
import TareaMemo from './05-hooks-app/TareaMemo';


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
// ReactDOM.render(<HooksApp />, divRoot);

/*
  Quinta Aplicación: Tarea Memo
*/
ReactDOM.render(<TareaMemo />, divRoot);
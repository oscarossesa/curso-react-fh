import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './01-intro-react/PrimeraApp';
// import CounterApp from './03-counter-app/CounterApp';
// import GifExpertApp from './04-gif-expert-app/GifExpertApp';
// import HooksApp from './05-hooks-app/HooksApp';
// import TareaMemo from './05-hooks-app/TareaMemo';
// import TodoApp from './05-hooks-app/components/08-useReducer/TodoApp';
// import MainApp from './05-hooks-app/components/09-useContext/MainApp';
// import HeroesApp from './07-heroes-app/HeroesApp';
import JournalApp from './08-journal-app/JournalApp';

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
  Cuarta Aplicación: GifExpertApp
*/
// ReactDOM.render(<GifExpertApp />, divRoot);

/*
  Hooks
*/
// ReactDOM.render(<HooksApp />, divRoot);

/*
  Tarea Memo
*/
// ReactDOM.render(<TareaMemo />, divRoot);

// import './05-hooks-app/components/08-useReducer/intro-reducer'

/*
  Sexta Aplicación: TodoApp
*/
// ReactDOM.render(<TodoApp />, divRoot);

/*
  MainApp
*/
// ReactDOM.render(<MainApp />, divRoot);

/*
  Septima Aplicación: HeroesApp
*/
// ReactDOM.render(<HeroesApp />, divRoot);

/*
  Octaba Aplicación: JournalApp
*/
ReactDOM.render(<JournalApp />, divRoot);
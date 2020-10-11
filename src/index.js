import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp';
// import CounterApp from './counter-app/CounterApp';
import GifExpertApp from './GifExpertApp/GifExpertApp';
import './index.css'

const divRoot = document.querySelector('#root'); 

// ReactDOM.render(<PrimeraApp saludo="Hola, Oscar" />, divRoot);

// ReactDOM.render(<CounterApp value={10} />, divRoot);

ReactDOM.render(<GifExpertApp />, divRoot);
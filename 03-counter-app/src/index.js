import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import  './index.css'
import CounterApp from './CounterApp';

// const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root');


// ReactDOM.render(<PrimeraApp saludo="Hola Soy Goku" />,divRoot);
ReactDOM.render(<CounterApp />,divRoot);
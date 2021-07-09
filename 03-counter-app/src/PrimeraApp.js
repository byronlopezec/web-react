import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// const PrimeraApp = (props) => {
// const PrimeraApp = ({ saludo="Valor por defecto" }) => {
const PrimeraApp = ({ saludo,subtitulo }) => {

    return (
        <>
            <h1> {saludo}</h1 >
            <h1> {subtitulo}</h1 >
            <p> Parrago de mi div</p>
        </>

    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}

PrimeraApp.defaultProps ={
    subtitulo: "Soy un sibtitulo"
}

export default PrimeraApp;
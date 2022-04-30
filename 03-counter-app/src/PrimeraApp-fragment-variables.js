import React, { Fragment } from 'react';

const PrimeraApp = () => {
    // se retorna una sola etiqueta, regularmente se encierra en un div
     // <div>
        //     <h1> Hola mundo desde PrimeraApp</h1 >
        //     <p> Parrago de mi div</p>
        // </div>
    // si no se quiere usar div se usa Fragment de React
        // <Fragment>
        //     <h1> Hola mundo desde PrimeraApp</h1 >
        //     <p> Parrago de mi div</p>
        // </Fragment>
    // Si no deseamos importar Fragment de react solo borramos la equita.

    const saludo = [1,2,3,4,5]
    const saludo2 = {
        nombre: 'Byron',
        edad: 34
    }

    return (
        <>
            <h1> {saludo}</h1 >
            {/* <h2> {saludo2}</h2 > da error porque react no lo permite  */}
            <pre>{JSON.stringify(saludo2,null,3)}</pre> {/* pre nos permite imprimir objetos */}
            <p> Parrago de mi div</p>
        </>

    );
}
// en logar de import Fragment para evitar poner div


export default PrimeraApp;
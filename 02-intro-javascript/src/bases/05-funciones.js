// Funciones flecha es lo mismo


// copio la referencia
const saludar = function (nombre) {
    return "Hola "+nombre;
}
console.log(saludar)


function miFuncion(nombre) {
    return "hola "+nombre;
}

console.log(miFuncion("Byron"));

// funciones flecha
const saludar2 = (nombre)=>{return ` Hola ${nombre}`}
console.log(saludar2("Desde Funcion flecha"));

const saludar3 = (nombre)=> ` Hola ${nombre}`;
console.log(saludar3("Desde Funcion flecha 3"));

const saludar4 = ()=>` Hola sin parametro`
console.log(saludar4());

//usar () si el valor no es un valor primitivo
const saludar5 = ()=>({nombre:'Abel',edad:23});
console.log(saludar5());

// function getUsuarioActivo(nombre) {
//     return {nombre:"Usuario ABC",username:nombre}
// }

const usuarioActivo = (nombre)=>({nombre:"Usuario ABC",username:nombre});

console.log(usuarioActivo('Byron'));


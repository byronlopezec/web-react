

const nombre="Byron";
const apellido = "Lopez";

const mensaje= ` Hola ${nombre} ${apellido}`
console.log(mensaje)

function getMensaje(nombre){
    return "Hola Mundo de "+nombre;
}
console.log(`${getMensaje(nombre)}`)
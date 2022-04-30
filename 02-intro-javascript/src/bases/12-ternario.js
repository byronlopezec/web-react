const activo = true;
let mensaje = '';

if (activo) {
    mensaje = "Activo";
}else {
    mensaje= "Inactivo"
}
console.log(mensaje);

// formas de reducir el codigo de un if

const message = (activo) ? 'Activo':'Inactivo';
const message2 = (activo) ? 'Activo': null;

// tambien

const message3 = !activo && 'Activo'; // retorna falso

console.log(message);
console.log(message2);
console.log(message3);
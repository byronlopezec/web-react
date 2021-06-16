const personajes = ["Brandom","Spiderman","Batman"];
const [,,p3] = personajes;

console.log(p3);

const abecedario = ()=>{
    return ["ABCDEF",1234567];
}

const [letras,numeros] = abecedario();

console.log(letras,numeros);

// 
const usarstate = (valor)=>{
    return [valor, ()=>"Hola Mundo " +valor]
}

const [nombre,funcion] =usarstate(12345);

console.log(nombre,funcion());
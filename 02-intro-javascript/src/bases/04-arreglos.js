const arreglo =[1,2,3,4];

const arreglo2 = [...arreglo,5];

console.log(arreglo);
console.log(arreglo2);

//cambiar los elementos con map
// callback es una funcion que recibe como parametro una funcion
const arreglo3 = arreglo2.map(function(x){
    return x*2;
});

console.log(arreglo3)
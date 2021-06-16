
const usuario={
    nombre: "Byron",
    apellidos: "López",
    edad:45,
    direccion:{
        nombre:'Sur Quito'
    }
}

console.log(usuario.nombre);

//ES7 es lo mismo
console.log({usuario:usuario});
console.log({usuario});

// Mutaciones 
// Se apunta en memoria a la misma celda
const persona = usuario;
persona.nombre = "Jennifer"

console.log({persona});
console.log({usuario});

// La solucion es crear un nuevo objeto apellidos
// Los tres puntos facilitan copiar un objeto
const persona2 = {...usuario};
persona2.nombre = "Viviana";
console.log({persona2});
console.log({usuario});


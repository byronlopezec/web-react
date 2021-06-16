const usuario = {
    nombre: "Byron",
    edad: 28,
    password: "Ironman",
    pais: "Colombia"
}



const retornaUsuario = ({nombre,edad,pais='Ecuador'})=>{

    console.log(nombre,edad,pais)
}

retornaUsuario(usuario);

/// ejemplo

const usarContexto = ({password,edad,pais='Ecuador'})=>{

    return {heroe:password,edad:edad};
}

const advenger = usarContexto(usuario);

const {heroe,edad} = advenger;
console.log(heroe,edad);

// Desestructuracion anidada

const heroeAdvenger = {...usuario,position:{lat:-4.33434,lng: 7.4555}};

console.log(heroeAdvenger);

const {position:{lat,lng}} = heroeAdvenger;
console.log(lat,lng);

// es mejor extraer el elemento 
const {position} = heroeAdvenger;

const {lat:latitud,lng:longitud} = position;
// observa que extraigo lat y long del objeto position 
//y lo asigno a las nuevas variables latitud y longitud respectivamente

console.log(latitud,longitud);


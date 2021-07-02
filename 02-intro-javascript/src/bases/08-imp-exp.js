/*
export const owners = ['DC','Marvel'];
export default heroes;
*/
// eslint-disable-next-line
import heroes,{owners} from '../data/heroes'


// Find retorna uno
const getHeroeByID = (id)=>{
    return heroes.find( e => e.id===id )
}

// Filter regresa varios
const getHeroeByOwner = (owner)=> heroes.filter( heroe => heroe.owner===owner);

// console.log(getHeroeByID(2));
// console.log(getHeroeByOwner('DC'));
// console.log(getHeroeByOwner('Marvel'));

// console.log(owners);

export { 
    getHeroeByID as default,
    getHeroeByOwner
}
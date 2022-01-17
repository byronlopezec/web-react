
import { heroes } from './../data/heroes';


export const getHerosById = (id = "") => {
    console.log('getGerooById: ' + id);

    return (
        heroes.find(hero => hero.id == id)
    )
}

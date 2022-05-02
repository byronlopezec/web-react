
import { heroes } from './../data/heroes';


export const getHerosById = (id = "") => {

    return (
        heroes.find(hero => hero.id === id)
    )
}

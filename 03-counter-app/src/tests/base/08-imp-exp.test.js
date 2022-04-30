import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba en 08 imports', () => {
    test('deberia retornar heroe por id', () => {

        const id_heroe = 1;
        const heroe_by_id = getHeroeById(id_heroe);

        const heroeData = heroes.find(h => h.id === id_heroe);

        expect(heroe_by_id).toEqual(heroeData);

    })

    test('deberia retornar undefined si herow no existe', () => {
        const id_heroe = 10;
        const heroe_by_id = getHeroeById(id_heroe);

        expect(heroe_by_id).toEqual(undefined);

    })

    //
    test('debe retornar array con heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner('DC');

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);

    })

    test('debe retornar array con heroes de MV de longitud 2', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner('Marvel');

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes.length).toBe(2);

    })

})

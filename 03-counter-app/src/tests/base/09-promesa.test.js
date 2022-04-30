import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('PRueba Promesa', () => {
    test('getHeroeByAsync deberia retornar un async', (done) => {


        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBe(heroes[0]);
                done();
            })
    })

    test('debe obtener error si heroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();

        })
    })


})

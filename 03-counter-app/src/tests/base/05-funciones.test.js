import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'


describe('Pruebas en 05-funciones', () => {
    test('deberia retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('el nombre deeria regresar en el username', () => {

        const userTest = {
            uid: 'ABC567',
            username: 'Juanito'
        
        }

        const user = getUsuarioActivo("Juanito");

        expect(user).toEqual(userTest);
    })

})

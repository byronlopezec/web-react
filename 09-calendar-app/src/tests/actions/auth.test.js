import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom'
import { startLogin } from './../../components/actions/auth';
import { types } from './../../types/types';
import Swal from 'sweetalert2';

const mockStore = configureStore([thunk]);

// mocks
const initState = {}
let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));



describe('Pruebas en las acciones', () => {

    beforeEach(() => {
        store = mockStore(initState)
    })

    test('startLogin correcto', async () => {

        await store.dispatch(startLogin("byron.lopez.begins@gmail.com", "123456"))
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: expect.any(String),
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String))
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number))

        // ver los datos de localStorage mock
        // console.log(localStorage.setItem.mock.calls[0][1])
    });


    test('StartLogin incorrecto', async () => {

        await store.dispatch(startLogin("byron.lopez.begins@gmail.com", "1234567"))
        const actions = store.getActions();
        
        expect(actions).toEqual([])
        expect(Swal.fire).toHaveBeenCalledWith("Error", "Usuario/Contrasenia no existe", "error")

    });
});
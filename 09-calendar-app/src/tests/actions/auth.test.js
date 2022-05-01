import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom'
import { startLogin, startRegister } from './../../components/actions/auth';
import { types } from './../../types/types';
import Swal from 'sweetalert2';
import * as fetchModule from '../../helper/fetch';

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

        await store.dispatch(startLogin("byron.lopez.begins23@gmail.com", "123456"))
        const actions2 = store.getActions();
        expect(actions2).toEqual([])
        expect(Swal.fire).toHaveBeenCalledWith("Error", "Usuario/Contrasenia no existe", "error")

    });


    test('startRegister correcto', async () => {

        fetchModule.fetchSinToken = jest.fn(() => ({
            json() {
                return {
                    ok: true,
                    uid: "123",
                    name: "Byron",
                    token: "ABCtoken"
                }
            }
        }));

        await store.dispatch(startRegister("Byron2","test123@test.com", "123456"))
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: "123",
                name: "Byron",
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', "ABCtoken")
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number))

    });
});
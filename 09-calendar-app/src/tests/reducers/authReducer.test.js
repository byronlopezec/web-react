
import { authReducer } from './../../reducer/authReducer';
import { types } from './../../types/types';

const initialState = {
    checking: true,

}

describe('Pruebas AuthReducer', () => {

    test('debería retornar el estado por defecto', () => {

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test("debe iniciar el Login", () => {

        const action = {
            type: types.authLogin,
            payload: {
                uid: "123",
                name: "Byron"
            }
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual(
            {
                checking: false,
                ...action.payload
            }
        )
    })

    test("debe iniciar el logout", () => {

        const action = {
            type: types.authLogout,
            payload: {
                checking: false
            }
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual({...action.payload})
    })

});

// Un reducer es una simple función que recibe dos parámetros, el estado y la acción.

import { types } from "../types/types";

// const state = {
//     name: 'Byron',
//     logged: true
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return { ...action.payload, logged: true }
        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}
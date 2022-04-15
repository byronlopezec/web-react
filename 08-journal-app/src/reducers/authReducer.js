import { types } from './../types/types';



const initialState = {}
export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.dispalyName
            }
        case types.logout:
            return {}

        default:
            return state
    }

}    
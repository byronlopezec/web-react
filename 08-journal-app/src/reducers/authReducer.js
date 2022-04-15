import { types } from "node-sass"

export const authReducer = (state = {}, action) => {

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
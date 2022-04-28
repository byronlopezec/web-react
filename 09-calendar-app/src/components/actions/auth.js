import { fetchSinToken } from "../../helper/fetch"
import { types } from './../../types/types';


export const startLogin = (email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken("auth", { email, password }, "POST");
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            const { uid, name } = body;
            console.log(body)
            dispatch(login(uid, name));
        }

    }
}

const login = (uid, name) => ({

    type: types.authLogin,
    payload: {
        uid,
        name
    }
});
import { fetchConToken, fetchSinToken } from "../../helper/fetch"
import { types } from './../../types/types';
import Swal from 'sweetalert2';

export const startLogin = (email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken("auth", { email, password }, "POST");
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            const { uid, name } = body;
            dispatch(login(uid, name));
        } else {
            Swal.fire("Error", body.msg, "error");
        }

    }
}


export const startRegister = (name, email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken("auth/new", { name, email, password }, "POST");
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            const { uid, name } = body;
            dispatch(login(uid, name));
        } else {
            Swal.fire("Error", body.msg, "error");
        }

    }
}

export const startChecking = () => {

    return async (dispatch) => {

        const resp = await fetchConToken("auth/renew", {});
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            const { uid, name } = body;
            dispatch(login(uid, name));
        } else {
            dispatch(checkingFinish());
            if (body?.token) {
                Swal.fire("Error", body.msg, "error");
            }
        }
    }
}


const checkingFinish = () => ({
    type: types.authCheckingFinish
});

const login = (uid, name) => ({

    type: types.authLogin,
    payload: {
        uid,
        name
    }
});

export const startLogout = () => {

    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
});
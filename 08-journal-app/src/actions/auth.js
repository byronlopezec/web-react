import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from './../types/types';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import { authErrors } from './../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading())
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading())
            }).catch(e => {
                dispatch(finishLoading())
                Swal.fire('Error', authErrors[e.code], 'error')
            })
    }
}

export const startRegisterEmailPassword = (name, email, password) => {

    return async (dispatch) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name })

                dispatch(login(user.uid, user.displayName))
            }).catch(e => {
                Swal.fire('Error', authErrors[e.code], 'error')
            })
    }
}

export const startGoogleLogin = () => {

    return async (dispatch) => {

        const auth = getAuth()
        await signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            }).catch(e => {
                Swal.fire('Error', authErrors[e.code], 'error')
            })
    }

}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await auth.signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})
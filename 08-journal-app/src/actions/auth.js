import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from './../types/types';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(12343, 'Jennifer'))
        }, 3500)
    }
}

export const startRegisterEmailPassword = (name, email, password) => {

    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name })

                dispatch(login(user.uid, user.displayName))
            }).catch(e => {
                console.log(e)
            })
    }
}

export const startGoogleLogin = () => {

    return (dispatch) => {

        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
    }

}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
}

)
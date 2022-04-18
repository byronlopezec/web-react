import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { types } from './../types/types';
import { loadNotes } from './../helpers/loadNotes';


export const startNewNote = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        // const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote);

        const docRef = doc(collection(db, `${uid}/journal/notes`));
        await setDoc(docRef, newNote);
        dispatch(activateNote(docRef.id, newNote))

    }
}

export const activateNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

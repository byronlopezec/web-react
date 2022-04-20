import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { types } from './../types/types';
import { loadNotes } from './../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from './../helpers/fileUpload';

// name of cloudinary project https://cloudinary.com/console/c-95942e1d74be65be550abaccf054f6
// react-journal-cloudinary

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
        dispatch(addNewNote(docRef.id, newNote))
    }
}

export const activateNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: { id, ...note }
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


export const startSaveNote = (note) => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url
        }

        const noteToFireStore = { ...note }
        delete noteToFireStore.id;

        const docRef = doc(db, `${uid}/journal/notes/${note.id}`);
        await updateDoc(docRef, noteToFireStore);

        dispatch(refreshNote(note.id, noteToFireStore))

    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdate,
    payload: { id, note: { id, ...note } }
})


export const startUploadPicture = (file) => {

    return async (dispatch, getState) => {

        const { active: activateNote } = getState().notes;

        var fileUrl;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: async () => {
                Swal.showLoading()
                fileUrl = await fileUpload(file);
                activateNote.url = fileUrl;
                dispatch(startSaveNote(activateNote));
                Swal.close()
            }
        }).then(result => {
            Swal.fire('Saved', 'Your note has been saved', 'success')
        })



    }
}


export const startDeleteNote = (id) => {

    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));

        dispatch(deleteNote(id))
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = () => ({
    type: types.notesLogoutClening
})

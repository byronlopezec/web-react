
import { types } from './../types/types';

const initialSate = {
    notes: [],
    active: null,
}

export const notesReducer = (state = initialSate, action) => {

    switch (action.type) {

        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes],
            };

        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            };

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id ? action.payload.note : note
                )
            }

        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case types.notesLogoutClening:
            return {
                ...state,
                active: null,
                notes: []
            }

        default:
            return state;
    }
}
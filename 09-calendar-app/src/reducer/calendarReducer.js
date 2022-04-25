import moment from "moment";
import { types } from './../types/types';


const initialState = {
    events: [
        {
            id: new Date().getTime(),
            title: 'All Day Event very long title',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            notes: 'Comprar el pastel',
            user: {
                _id: '123',
                name: 'Byron López'
            }
        }

    ],
    activeEvent: null,
}


export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload]
            }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventUpdate:
            return {
                ...state,
                events: state.events.map(event => (event.id === action.payload.id ? action.payload : event))
            }
        case types.eventDelete:
            return {
                ...state,
                events: state.events.filter(event => (event.id !== state.activeEvent.id)),
                activeEvent: null
            }

        default:
            return state;
    }
}


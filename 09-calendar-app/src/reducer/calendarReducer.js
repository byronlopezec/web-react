import { types } from './../types/types';

const initialState = {
    events: [],
    activeEvent: null,
    tentativeEvent: null
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
                activeEvent: null,
                tentativeEvent: null
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

        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }

        case types.eventLogout:
            return {
                ...initialState
            }

        case types.eventSetTentative:
            return {
                ...state,
                tentativeEvent: {
                    start: action.payload.start,
                    end: action.payload.end,
                }
            }

        default:
            return state;
    }
}


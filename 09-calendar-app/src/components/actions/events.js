
import { fetchConToken } from '../../helper/fetch';
import { types } from './../../types/types';
import { prepareEvents } from './../../helper/prepareEvents';
import Swal from 'sweetalert2';


export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {

        const { uid, name } = getState().auth;

        try {
            const resp = await fetchConToken('events', event, 'POST');

            const body = await resp.json();


            if (body.ok) {
                event.id = body.msg.id;
                event.user = {
                    _id: uid,
                    name: name,
                }
                dispatch(eventAddNew(event));
            }

        } catch (error) {
            console.log(error);

        }

    }
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
})

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})


export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
})


export const eventStartUpdate = (event) => {

    return async (dispatch) => {

        try {
            const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();

            console.log(body)
            if (body.ok) {
                dispatch(eventUpdated(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);

        }

    }
}

const eventUpdated = (event) => ({
    type: types.eventUpdate,
    payload: event
})


export const eventStartDelete = () => {

    return async (dispatch, getState) => {
        try {
            const { activeEvent } = getState().calendar;
            const resp = await fetchConToken(`events/${activeEvent.id}`, {}, 'DELETE');
            const body = await resp.json();

            if (body.ok) {
                dispatch(eventDelete());
                Swal.fire('Eliminado', body.msg, 'success');

            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    }
}

const eventDelete = () => ({
    type: types.eventDelete,
})


export const eventStartLoading = () => {
    return async (dispatch, getState) => {

        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();

            const events = prepareEvents(body.events);

            dispatch(eventLoaded(events));
        } catch (error) {
            console.log(error);

        }
    }
}

export const eventLoaded = (events) => ({

    type: types.eventLoaded,
    payload: events
})

export const eventLogout = () => ({
    type: types.eventLogout
})

export const eventTentativeLoad = (event) => ({
    type: types.eventSetTentative,
    payload: event
})
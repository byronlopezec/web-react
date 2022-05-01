
import React, { useEffect, useState } from 'react'
import { Navbar } from './../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from './../../helper/calendar-message';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from './../actions/ui';
import {
    eventSetActive, eventStartLoading,
    eventClearActiveEvent, eventTentativeLoad
} from '../../components/actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.updateLocale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(eventStartLoading())
    }, [dispatch])

    const [lastView, setLastView] = useState(
        localStorage.getItem('lastView') || 'month'
    )

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal())
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e))
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e);
    }

    const onSelectLot = (e) => {
        dispatch(eventClearActiveEvent())
        dispatch(eventTentativeLoad(e))
        if (e.action === "doubleClick") {
            dispatch(uiOpenModal())
        }

    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: (uid === event.user._id) ? '#367CF7' : '#E5E5E5',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        }
        return {
            style
        }
    }

    return (
        <div className='calendar-screen'>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectLot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />
            {activeEvent && <DeleteEventFab />}
            <CalendarModal />
        </div>
    )
}

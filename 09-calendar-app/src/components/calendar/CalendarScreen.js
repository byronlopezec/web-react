
import React, { useState } from 'react'
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
import { eventSetActive } from '../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteDeventFab } from '../ui/DeleteDeventFab';
import { eventClearActiveEvent } from './../actions/events';

moment.updateLocale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);

    const dispatch = useDispatch();

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
        onDoubleClick(e)
        dispatch(eventClearActiveEvent())

    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367CF7',
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
            {activeEvent && <DeleteDeventFab />}
            <CalendarModal />
        </div>
    )
}

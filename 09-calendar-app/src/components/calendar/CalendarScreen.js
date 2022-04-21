
import React, { useState } from 'react'
import { Navbar } from './../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from './../../helper/calendar-message';
import { CalendarEvent } from './CalendarEvent';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'All Day Event very long title',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Byron López'
    }
}];

export const CalendarScreen = () => {


    const [lastView, setLastView] = useState(
        localStorage.getItem('lastView') || 'month'
    )

    const onDoubleClick = (e) => {

    }

    const onSelectEvent = (e) => {

    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        console.log(event);

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
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

        </div>
    )
}


import React from 'react'
import { Navbar } from './../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from './../../helper/calendar-message';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'All Day Event very long title',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
}];

export const CalendarScreen = () => {

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
            />

        </div>
    )
}

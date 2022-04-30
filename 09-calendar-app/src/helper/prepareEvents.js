

export const prepareEvents = (events) => {

    return events.map(event => {
        return {
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
        }
    })
}
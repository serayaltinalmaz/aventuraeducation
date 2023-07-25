import React, { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({children}) => {
    const [sumcount, setSumcount] = useState(0);
    const [likebar, setLikebar] = useState(false);
    const eventdata= {sumcount, setSumcount, likebar, setLikebar};
    return (
        <EventContext.Provider value={eventdata} >
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider

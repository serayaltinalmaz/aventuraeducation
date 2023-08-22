import React, { createContext, useState } from "react";

type EventContextType = {
    sumcount: number;
    setSumcount: (value: number) => void ;
    likebar : boolean ;
    setLikebar : (value : boolean) => void ;
};

export const EventContext = createContext<EventContextType>({} as EventContextType);

const EventProvider = ({children}:any) => {
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

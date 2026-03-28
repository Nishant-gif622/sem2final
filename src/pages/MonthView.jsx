import { useState,useEffect } from "react";

import Calendar from "../components/Calendar";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

function MonthView(){

  const [events,setEvents] = useState([]);

  useEffect(()=>{

    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);

  },[]);

  function addEvent(event){

    const updatedEvents = [...events,event];
    setEvents(updatedEvents);
    localStorage.setItem("events",JSON.stringify(updatedEvents));

  }

  function deleteEvent(index){

    const updatedEvents = events.filter((_,i)=>i !== index);

    setEvents(updatedEvents);
    localStorage.setItem("events",JSON.stringify(updatedEvents));

  }

  return(

    <div>

      

      <EventForm addEvent={addEvent} />

      <Calendar events={events} />

      <EventList events={events} deleteEvent={deleteEvent} />

    </div>

  )

}

export default MonthView;
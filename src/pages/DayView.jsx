import { useEffect,useState } from "react";

function DayView(){

  const [events,setEvents] = useState([]);

  useEffect(()=>{

    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);

  },[]);

  const today = new Date().getDate();

  return(

    <div style={{padding:"20px"}}>

      
      <h2>Day View</h2>

      {events
      .filter(e=>parseInt(e.date.split("-")[2]) === today)
      .map((event,i)=>(

        <div key={i} className="event">

          {event.title} – {event.startTime} to {event.endTime}

        </div>

      ))}

    </div>

  )

}

export default DayView;
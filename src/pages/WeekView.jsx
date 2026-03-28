import { useEffect,useState } from "react";

function WeekView(){

  const [events,setEvents] = useState([]);
  const [weekOffset,setWeekOffset] = useState(0);

  useEffect(()=>{

    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);

  },[]);

  function getWeekDays(offset){

    const today = new Date();

    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + offset*7)
    );

    const days = [];

    for(let i=0;i<7;i++){

      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate()+i);
      days.push(d);

    }

    return days;

  }

  const currentWeek = getWeekDays(weekOffset);

  return(

    <div style={{padding:"20px"}}>

      
      <h2>Week View</h2>

      <button onClick={()=>setWeekOffset(weekOffset-1)}>
      Previous Week
      </button>

      <button onClick={()=>setWeekOffset(weekOffset+1)}>
      Next Week
      </button>

      {currentWeek.map((day,idx)=>(

        <div key={idx}>

          <strong>{day.toDateString()}</strong>

          {events
          .filter(e=>e.date === day.toISOString().split("T")[0])
          .map((event,i)=>(

            <div key={i} className="event">

              {event.title} – {event.startTime} to {event.endTime}

            </div>

          ))}

        </div>

      ))}

    </div>

  )

}

export default WeekView;
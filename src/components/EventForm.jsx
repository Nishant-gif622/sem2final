import { useState } from "react";

function EventForm({ addEvent }) {

  const [title,setTitle] = useState("");
  const [date,setDate] = useState("");
  const [startTime,setStartTime] = useState("");
  const [endTime,setEndTime] = useState("");

  function handleSubmit(e){

    e.preventDefault();

    if(!title || !date || !startTime || !endTime) return;

    const newEvent = { title,date,startTime,endTime };

    addEvent(newEvent);

    setTitle("");
    setDate("");
    setStartTime("");
    setEndTime("");

  }

  return(

    <div className="event-form">
       
      <h2>Add Event</h2>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />

        <input
        type="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        />

        <input
        type="time"
        value={startTime}
        onChange={(e)=>setStartTime(e.target.value)}
        />

        <input
        type="time"
        value={endTime}
        onChange={(e)=>setEndTime(e.target.value)}
        />

        <button type="submit">Add Event</button>

      </form>

    </div>

  )

}

export default EventForm;
function EventList({ events, deleteEvent }) {

  return (

    <div style={{padding:"20px"}}>
       
      <h2>All Events</h2>

      {events.length === 0 ? (

        <p>No events yet</p>

      ) : (

        events.map((event,index)=>(

          <div key={index} className="event">

            {event.title} – {event.date} – {event.startTime} to {event.endTime}

            <button
            style={{
              marginLeft:"10px",
              background:"#e74c3c",
              color:"white",
              border:"none",
              padding:"5px 10px",
              borderRadius:"5px",
              cursor:"pointer"
            }}
            onClick={()=>deleteEvent(index)}
            >
            Delete
            </button>

          </div>

        ))

      )}

    </div>

  )

}

export default EventList;
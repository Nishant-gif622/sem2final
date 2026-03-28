function Calendar({ events }) {

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = new Date().getDate();

  return (
    <div className="calendar">
      
      {days.map((day) => (

        <div key={day} className={`day-cell ${day === today ? "today" : ""}`}>

          <strong>{day}</strong>

          {events
            .filter((event) => parseInt(event.date.split("-")[2]) === day)
            .map((event, index) => (

              <div key={index} className="event">

                {event.title}
                <br />

                {event.startTime} - {event.endTime}

              </div>

            ))}

        </div>

      ))}

    </div>
  );
}

export default Calendar;
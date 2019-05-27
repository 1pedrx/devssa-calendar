import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import style from "react-big-calendar/lib/css/react-big-calendar.css";
import months from "./months/05.json";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: months
    };
  }

  render() {
    const events = this.state.events.map(function(event) {
      event.start = new Date(event.start);
      event.end = new Date(event.end);
      return event;
    });
    return (
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    );
  }
}

export default Calendario;

import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
// import { Calendar } from "@fullcalendar/core";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import Event from "./Event.jsx";
import interactionPlugin from "@fullcalendar/interaction";
import list from "@fullcalendar/list";
// import loadMonths from "./loadEvents.js";

import "./css/main.scss"; // webpack must be configured to do this

class Calendario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {
        show: false,
        description: "aaaa",
        url: "aaaaa0",
        title: "aaaaaaasdasdada",
        color: "black"
      }
    };

    this.calendarRef = React.createRef();
  }

  showEvent = async eventData => {
    // let event = new Event();
    console.log(eventData);
    let event = {
      show: true,
      // url: eventData.event.url,
      title: eventData.event.title,
      description: eventData.event.extendedProps.description,
      event_url: eventData.event.extendedProps.event_url,
      color: eventData.event.backgroundColor
    };
    // console.log(eventData.event);
    await this.setState({ event: event });
  };
  render() {
    // console.log(this.state.inicialEvents);

    return (
      <div className="col-10 align-self-center" style={{ margin: "auto" }}>
        <FullCalendar
          id={"calendar-ssa"}
          defaultView={"dayGridMonth"}
          themeSystem={"bootstrap"}
          plugins={[dayGridPlugin, list]}
          locales={allLocales}
          locale="pt-br"
          firstDay={0}
          ref={this.calendarRef}
          allDayDefault={false}
          listDayAltFormat={true}
          listDayFormat={true}
          selectable={true}
          selectHelper={true}
          editable={true}
          eventLimit={true}
          eventClick={this.showEvent}
          // month={true}
          changeView={this.getCurrentView}
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay,list"
          }}
          ref={this.calendarRef}
          buttonIcons={true}
          titleFormat={{ year: "numeric", month: "long", day: "numeric" }}
          displayEventEnd={true}
          displayEventTime={true}
          events="./events/events.json"
        />
        <Event
          show={this.state.event.show}
          title={this.state.event.title}
          description={this.state.event.description}
          event_url={this.state.event.event_url}
          color={this.state.event.color}
        />
      </div>
    );
  }
}

export default Calendario;

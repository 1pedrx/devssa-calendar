import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
// import { Calendar } from "@fullcalendar/core";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import Event from "./Event.jsx";
import interactionPlugin from "@fullcalendar/interaction";
import list from "@fullcalendar/list";
import loadMonths from "./loadEvents.js";

import "./main.scss"; // webpack must be configured to do this

class Calendario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {
        show: false,
        description: "aaaa",
        url: "aaaaa0",
        title: "aaaaaaasdasdada"
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
      event_url: eventData.event.extendedProps.event_url
    };
    // console.log(eventData);
    await this.setState({ event: event });
  };
  render() {
    // console.log(this.state.inicialEvents);

    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
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
          events="./months/05.json"
        />
        <Event
          show={this.state.event.show}
          title={this.state.event.title}
          description={this.state.event.description}
          event_url={this.state.event.event_url}
        />
      </div>
    );
  }
}

export default Calendario;

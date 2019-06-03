import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
// import { Calendar } from "@fullcalendar/core";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import list from "@fullcalendar/list";
import loadMonths from "./loadEvents.js";

import "./main.scss"; // webpack must be configured to do this

class Calendario extends React.Component {
  constructor(props) {
    super(props);

    this.calendarRef = React.createRef();
  }
  render() {
    // console.log(this.state.inicialEvents);

    return (
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
    );
  }
}

export default Calendario;

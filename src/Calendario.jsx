import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import list from "@fullcalendar/list";

import "./main.scss"; // webpack must be configured to do this

class Calendario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inicialEvents: [
        {
          id: 11,
          title: "AAAAAAAAAAAAAAAAAAAAAA",
          start: "2019-06-01 22:08:08",
          end: "2019-06-01 23:59:59",
          allDay: true,
          color: "red"
        },
        {
          id: 11,
          title: "AAAAAAAAAAAAAAAAAAAAAA",
          start: "2019-06-01 22:08:08",
          end: "2019-06-01 23:59:59",
          allDay: true,
          color: "red"
        },
        {
          id: 11,
          title: "AAAAAAAAAAAAAAAAAAAAAA",
          start: "2019-06-01 22:08:08",
          end: "2019-06-01 23:59:59",
          allDay: true,
          color: "red"
        }
      ],
      events: this.props.events
    };

    this.calendarRef = React.createRef();
  }
  componentDidMount = async () => {
    // this.calendarRef.current.render();
    // this.state.events.push({});
    // await this.setState({ inicialEvents: this.state.events });
  };

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
        events={this.state.inicialEvents}
      />
    );
  }
}

export default Calendario;

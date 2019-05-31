import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import list from "@fullcalendar/list";

import months from "./months/05.json";

import "./main.scss"; // webpack must be configured to do this

class Calendario extends React.Component {
  constructor(props) {
    super(props);

    const DayButton = {
      text: "Dia",
      click: () => this.updateCurrentView("dayGridDay")
    };

    const MonthButton = {
      text: "Mes",
      click: () => this.updateCurrentView("dayGridMonth")
    };
    const ListButton = {
      text: "Lista",
      click: () => this.updateCurrentView("list")
    };

    this.calendar = React.createRef();

    this.state = {
      defaultView: "dayGridMonth",
      buttons: { DayButton, MonthButton, ListButton }
    };
  }

  updateCurrentView = view => {
    this.refs.calendar.calendar.changeView(view);
  };

  render() {
    return (
      <FullCalendar
        id={"calendar-ssa"}
        defaultView={"dayGridMonth"}
        themeSystem={"bootstrap"}
        plugins={[dayGridPlugin, list]}
        locales={allLocales}
        locale="pt"
        firstDay={0}
        allDayDefault={false}
        listDayAltFormat={true}
        listDayFormat={true}
        views={["month", "week", "day"]}
        // month={true}
        changeView={this.getCurrentView}
        header={{
          left: "prev,next today DayButton MonthButton ListButton",
          center: "title",
          right: "month,  basicWeek, basicDay"
        }}
        ref="calendar"
        buttonIcons={true}
        titleFormat={{ year: "numeric", month: "long" }}
        displayEventEnd={true}
        displayEventTime={true}
        customButtons={this.state.buttons}
        type={"month"}
        events={[
          { title: "event 1", date: "2019-06-01 09:08:08" },
          {
            title: "event 2",
            start: "2019-06-01 22:08:08",
            end: "2019-06-01 23:59:59",
            allDay: false
          },
          { title: "event 3", date: "2019-06-01" },
          { title: "event 4", date: "2019-06-01" },
          { title: "event 2", date: "2019-05-30" }
        ]}
      />
    );
  }
}

export default Calendario;

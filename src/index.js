import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import Calendario from "./Calendario.jsx";
let loadEvents = require("./loadEvents");
const events = loadEvents.loadMonths();

// console.log(events);

ReactDOM.render(
  <Calendario events={events} />,
  document.getElementById("index")
);

import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import Calendario from "./Calendario.jsx";
import loadMonths from "./loadEvents.js";
// let loadEvents = require("./loadEvents");
const events = loadMonths();

ReactDOM.render(
  <Calendario events={events} />,
  document.getElementById("index")
);

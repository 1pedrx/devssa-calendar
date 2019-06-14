import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import Calendario from "./Calendario.jsx";
// import loadMonths from "./loadEvents.js";
// let loadEvents = require("./loadEvents");
// const events = loadMonths();

ReactDOM.render(<Calendario />, document.getElementById("index"));

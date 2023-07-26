let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? localStorage.getItem("events")
  : [];
const calendar = document.getElementById("calendar");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function load() {
  const dt = new Date();
  const day = dt.getDay();
  const month = dt.getMonth(); // 0 is January
  const year = dt.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0); //
}

load();

import clock from "clock";
import document from "document";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const time = document.getElementById("time");
const date = document.getElementById("date");

date.text = util.todayDate();

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  hours = util.zeroPad(hours);
  let mins = util.zeroPad(today.getMinutes());
  time.text = `${hours}:${mins}`;
  
  if (hours === '00' && mins === '00') {
    date.text = util.todayDate();
  }
}
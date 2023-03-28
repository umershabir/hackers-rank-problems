// Time Conversion
function timeConverstion(input) {
  if (input.indexOf("PM") !== -1) {
    if (input.slice(0, 2) === "12") {
      return console.log(input.slice(0, -2));
    }
  } else if (input.indexOf("AM")) {
    let amTime = input.slice(0, -2);
    if (amTime.slice(0, 2) === "12") {
      console.log("00" + amTime.slice(2));
    } else return console.log(amTime);
  }
}
timeConverstion("12:10:00PM");
timeConverstion("01:10:00AM");
timeConverstion("12:10:00AM");

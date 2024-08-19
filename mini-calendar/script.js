const showDate = document.getElementById("date");
const showDay = document.getElementById("day");
const showMonth = document.getElementById("month");
const showYear = document.getElementById("year");

const time = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "firday",
  "saturday",
];
const allMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDate = new Date();

function display() {
  // =====>date<=====
  showDate.innerText = currentDate.getDate();
  //   =====>time<=====
  showDay.innerText = time[currentDate.getDay()];
  //   =====>month<=====
  showMonth.innerText = allMonth[currentDate.getMonth()]
  // =====>year<=====
  showYear.innerText = currentDate.getFullYear();
}
display();

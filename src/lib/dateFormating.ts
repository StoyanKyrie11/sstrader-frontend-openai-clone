export default function dateFormating() {
  const currentDate = new Date();

  const monthsArr = [
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

  const currentMonth = monthsArr[currentDate.getMonth()];
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();

  return `${currentMonth} ${currentDay}, ${currentYear}`;
}

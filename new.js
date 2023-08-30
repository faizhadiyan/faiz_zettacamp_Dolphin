const dueDates = Array.from({ length: 6 }, (_, month) => {
  const dueDate = new Date();
  dueDate.setMonth(dueDate.getMonth() + month + 1);
  return dueDate;
});

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

console.log(currentYear); // Outputs the current year (e.g., 2023)
console.log(currentMonth); // Outputs the current month (0-indexed, January is 0)
console.log(currentDay); // Outputs the current day of the month

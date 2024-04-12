// Months and Days
// -----------------------------------------------------------
var monthList = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
var dayList = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

// The Date Object
// -----------------------------------------------------------
var dateObject = new Date();
console.log('date:',dateObject);

// Hours
// -----------------------------------------------------------
var hours = dateObject.getHours();
hours = hours % 12;
console.log('hours:', hours);

// Minutes
// -----------------------------------------------------------
var minutes = dateObject.getMinutes();
console.log('minutes:', minutes);

// Seconds
// -----------------------------------------------------------
var seconds = dateObject.getSeconds();
console.log('seconds:', seconds);

// Period
// -----------------------------------------------------------
var period = (dateObject.getHours() <= 12) ? 'am' : 'pm';
console.log('period:', period);

// Year
// -----------------------------------------------------------
var year = dateObject.getFullYear();
console.log('year:', year);

// Month
// -----------------------------------------------------------
var monthIndex = dateObject.getMonth();
var month = monthList[monthIndex];
console.log('month:', month);

// Day
// -----------------------------------------------------------
var dayIndex = dateObject.getDay();
var day = dayList[dayIndex];
console.log('day:', day);


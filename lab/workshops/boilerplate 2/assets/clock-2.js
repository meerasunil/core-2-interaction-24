//Get Elements 
//-------------------------------------
var hoursElement = document.querySelector('.Hours');
var minutesElement = document.querySelector('.Minutes');
var secondsElement = document.querySelector('.Seconds');
console.log(hoursElement, minutesElement, secondsElement);


//every second 
//---------
setInterval(() => {
    //get time 
    var dateObject = new Date ();
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var seconds = dateObject.getSeconds();
    console.log(hours, minutes, seconds);

    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes; 
    secondsElement.innerHTML = seconds; 

    console.log('hello world');
}, 1000);
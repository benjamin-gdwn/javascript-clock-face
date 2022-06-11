const secondHand = document.querySelector('.second-hand');

const minHand = document.querySelector('.min-hand');

const hourHand = document.querySelector('.hour-hand');
// function to get the date and time
function setDate(){
    // console.log('hi');
    // variable to store the date
    const now = new Date();
    // variable to store the seconds
    const seconds = now.getSeconds();
    // variable to calculate how many degrees to rotate per second
    const secondDegrees = (((seconds/ 60) * 360) + 90);
    // setting the transform for the seconds hand to rotate at the speed set by the equation 
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    // console.log(seconds);
    // --------------------------------------------------------------------------------------------
    
    // ----------------------------Minute Hand Code--------------------------------------

    // --------------------------------------------------------------------------------------------
    // variable to store minutes   
    const mins = now.getMinutes();
    // variable to store equation of mins per degrees
    const minutesDegrees = (((mins/ 60) * 360) + 90);
    // setting the transform for the minutes hand to rotate
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    // variable to store the hour
    const hour = now.getHours();
    // variable to store the hour per degree
    const hourDegrees = (((hour/ 12) * 360) + 90);
    // setting the transform for the hour hand
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
// interval property of set date function to every second
setInterval(setDate, 1000)
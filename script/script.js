window.addEventListener('DOMContentLoaded', function() {
'use strict';
  
// timer
 function countTimer(deadline){
   let timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds');

   function getTimeRemaining() {
     let dateStop = new Date(deadline).getTime(),
         dateNow = new Date().getTime(),
         timeRemaining = (dateStop - dateNow) / 1000,
         seconds = Math.floor(timeRemaining % 60),
         minutes = Math.floor((timeRemaining / 60) % 60),
         hours = Math.floor(timeRemaining / 60 / 60 );
  
       return {timeRemaining, hours, minutes, seconds };
       
   }
    function add(a) {
         if (a < 10) {
           a = '0' + a};
           return a;
    };
    function updateClock() {
      let timer = getTimeRemaining();

      timerHours.textContent = add(timer.hours);
      timerMinutes.textContent = add(timer.minutes);
      timerSeconds.textContent = add(timer.seconds);
 
      if(timer.timeRemaining < 0) {
        timerHours.textContent = add(0);
        timerMinutes.textContent = add(0);
        timerSeconds.textContent = add(0);
        clearInterval(timerId);
      }
    } 
    updateClock(); 
    let timerId = setInterval( updateClock, 1000); 
 }  
  countTimer('10 november 2020');
  
 
});

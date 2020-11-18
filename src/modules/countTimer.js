 const countTimer = (deadline) => {
   const timerHours = document.querySelector('#timer-hours'),
       timerMinutes = document.querySelector('#timer-minutes'),
       timerSeconds = document.querySelector('#timer-seconds');

   const getTimeRemaining = () => {
     const dateStop = new Date(deadline).getTime(),
         dateNow = new Date().getTime(),
         timeRemaining = (dateStop - dateNow) / 1000,
         seconds = Math.floor(timeRemaining % 60),
         minutes = Math.floor((timeRemaining / 60) % 60),
         hours = Math.floor(timeRemaining / 60 / 60 );
  
       return {timeRemaining, hours, minutes, seconds };
       
   };
    const add = (a) => {
         if (a < 10) {
           a = '0' + a};
           return a;
    };
    const updateClock = () => {
      const timer = getTimeRemaining();

      timerHours.textContent = add(timer.hours);
      timerMinutes.textContent = add(timer.minutes);
      timerSeconds.textContent = add(timer.seconds);
 
      if(timer.timeRemaining < 0) {
        timerHours.textContent = add(0);
        timerMinutes.textContent = add(0);
        timerSeconds.textContent = add(0);
        clearInterval(timerId);
      }
    }; 
    updateClock(); 
    const timerId = setInterval( updateClock, 1000); 
 }; 

 export default countTimer;
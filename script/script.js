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
  

  //  menu
  const toggleMenu = () => {
     
     const btnMenu = document.querySelector('.menu'),
           menu = document.querySelector('menu'),
           closeBtn = document.querySelector('.close-btn'),
           menuItems = menu.querySelectorAll('ul>li');

     const handlermenu = () => {
       menu.classList.toggle('active-menu');
     };      
     btnMenu.addEventListener('click', handlermenu);
     closeBtn.addEventListener('click', handlermenu);
     menuItems.forEach((elem) => elem.addEventListener('click', handlermenu));
  };

  toggleMenu();

  // popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close');
    let   popupContent = document.querySelector('.popup-content'),
          count =100;
          let popupRight = function() {
              popup.style.display = 'block';
               count--;
               if(screen.width >= 768 && count > 10){
                 popupContent.style.top = count +'%';
                 setTimeout(popupRight, 10);  
               } 
            };
          popupBtn.forEach((elem) => {
            elem.addEventListener('click', popupRight );
           });
        
          popupClose.addEventListener('click', () => {
             popup.style.display = 'none';
             count = 100;
          }); 
  };
  
  togglePopup();
  console.log(screen.width);

  // scroll


  const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (elem) {
    elem.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

});

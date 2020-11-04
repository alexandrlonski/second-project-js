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
    // доп задание урок 20
     const menu = document.querySelector('menu');
           
     const handlermenu = () => {
       menu.classList.toggle('active-menu');
     };  
     document.addEventListener('click', (event) => {
        let target = event.target;

        if(target.closest('.menu') || (menu.classList.contains('active-menu') && target.matches('a')) 
        || (menu.classList.contains('active-menu') && !target.matches('menu'))){
         handlermenu();
       } 
     });
    //  Осноное задание урок 20
    // const btnMenu = document.querySelector('.menu');
    //  btnMenu.addEventListener('click', (event) => {
    //    let target = event.target;
    //     if(target.closest('.menu')){
    //      handlermenu();
    //    }
    //  });
    //  menu.addEventListener('click', (event) => {
    //    let target = event.target;
    //    if(target.matches('a')){
    //      handlermenu();
    //    } else {
    //      clickOther();
    //    }    
    //  });
  };

  toggleMenu();

  // popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn');
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

          popup.addEventListener('click', (event) => {
              let target = event.target;
              if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
                 count = 100;
              } else {
                target = target.closest('.popup-content');
              if(!target){
                popup.style.display = 'none';
                count = 100;
              } 
              }
                     
          } );
  };
  
  togglePopup();
  
  // scroll
  const scroll = () => {
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
};
scroll();

//  tabs
const tabs = () => {
  const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
  const toggleTabContent = (index) => {
  for(let i = 0; i < tabContent.length; i++) {
       if(index === i){
         tab[i].classList.add('active');
         tabContent[i].classList.remove('d-none');
       } else {
         tab[i].classList.remove('active');
         tabContent[i].classList.add('d-none');
       } 
  }
  };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');
              
            if(target) {
              tab.forEach((item, i) => {
                if(item === target){
                  toggleTabContent(i);
                }
              });
            }
        });
        
}
tabs();



});

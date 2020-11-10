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
  countTimer('22 november 2020');
  

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
 
// slider
const slider = () => {

  const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
           slider = document.querySelector('.portfolio-content');

    const addDots = () => {
      const portfolioDots = document.querySelector('.portfolio-dots');
      
      slide.forEach((index) => {
        const doti = document.createElement('li');
              doti.className = 'dot';
              portfolioDots.appendChild(doti);
         
      });
       portfolioDots.firstElementChild.classList.add('dot-active'); 
    };
    addDots();
   
    const dot = document.querySelectorAll('.dot');
         
         
    let currentSlide = 0,
        Interval;
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if( currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
      
    };      
    const startSlide = (time = 2000) => {
         Interval = setInterval(autoPlaySlide, time);
    }; 
        
    const stopSlide = () => {
       clearInterval(Interval);
    }; 
     

    slider.addEventListener('click', (event) => {
       event.preventDefault();
       let target = event.target;
       if(!target.matches('.dot, .portfolio-btn')){
         return;
       }
       prevSlide(slide, currentSlide, 'portfolio-item-active');
       prevSlide(dot, currentSlide, 'dot-active');
       
       if( target.matches('#arrow-right') ){
         currentSlide++;
       } else if( target.matches('#arrow-left') ){
         currentSlide--;
       } else if( target.matches('.dot') ){
           dot.forEach((elem, index) => {
              if(elem === target){
                currentSlide = index;
              }
           });
       }
       if(currentSlide >= slide.length){
         currentSlide = 0;
       }
       if(currentSlide < 0){
         currentSlide = slide.length -1;
       }
       nextSlide(slide, currentSlide, 'portfolio-item-active');
       nextSlide(dot, currentSlide, 'dot-active');
    });
    
    slider.addEventListener('mouseover', (event) => {
           if(event.target.matches('.portfolio-btn') || 
          event.target.matches('.dot')) {
            stopSlide();
          }
    });
    slider.addEventListener('mouseout', (event) => {
          if(event.target.matches('.portfolio-btn') || 
          event.target.matches('.dot')) {
            startSlide();
          }
    });
    
    startSlide();
};
slider();

const changePhoto = () => {
const img = document.querySelectorAll('.command__photo');
  
  img.forEach((elem, index, arr) => {
    let imgOld = img[index].src ;
   img[index].addEventListener('mouseover', (event) => {
     event.target.src = event.target.dataset.img;
   });
   
   img[index].addEventListener('mouseout', (event) => {
     event.target.src = imgOld;
   });
})
};
changePhoto();

const inputEnter = () => {
  const inputSquare = document.querySelector('.calc-square'),
        inputCount = document.querySelector('.calc-count'),
        inputDay = document.querySelector('.calc-day');

       inputSquare.addEventListener('input', () => {
         inputSquare.value = inputSquare.value.replace(/\D/g, '');
       }) 
       inputCount.addEventListener('input', () => {
         inputCount.value = inputCount.value.replace(/\D/g, '');
       }) 
       inputDay.addEventListener('input', () => {
         inputDay.value = inputDay.value.replace(/\D/g, '');
       }) 
};
inputEnter();

});

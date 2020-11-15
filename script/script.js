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
    let imgOld = elem.src ;
   elem.addEventListener('mouseover', (e) => e.target.src = e.target.dataset.img);
   elem.addEventListener('mouseout', (e) => e.target.src = imgOld);
  });
};
changePhoto();

const inputEnter = () => {
  const input = document.querySelectorAll('.calc-item');
     input.forEach((elem, i) => {
        if (i !== 0) {
        elem.addEventListener('input', () => {
         elem.value = elem.value.replace(/\D/g, '');
          });
        }
       }); 
      };    
inputEnter();

// калькулятор
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay= document.querySelector('.calc-day'),
        calcCount= document.querySelector('.calc-count'),
        totalValue = document.getElementById('total'); 
    
        
   const countSum = () => {
      let total = 0,
          countValue = 1,
          dayValue = 1,
          count = 0; 
      const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;


      if(calcCount.value > 1){
        countValue += (calcCount.value - 1) / 10;
       }
      if(calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if(calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
            
      if(typeValue && squareValue)  {
        total = price * typeValue * squareValue * countValue * dayValue;
      }
      let totalNum = Math.floor(total);
      let interval;
      
      let numberUp = () => {
          count += 100;
          if(count <= totalNum){
            totalValue.textContent = count;
            interval = setTimeout(numberUp, 1);
          } else {
            clearTimeout(interval);
            count = 0;
          }
        };
        numberUp();
    };

 
    

     calcBlock.addEventListener('change', (event) => {
         const target = event.target;
        //  if(target.matches('.calc-type') || target.matches('.calc-square') || 
        //  target.matches('.calc-day') || target.matches('.calc-count')) {
        //    console.log(1);
        //  }
        // if(target === calcBType || target === calcSquare ||
        //   target === calcDay || target === calcCount ) {
        //     console.log(2);
        //   }
        if(target.matches('select') || target.matches('input') ) {
            countSum();
          }
     });   

};
calc(100);

// send-ajax-form
const sendForm = () => {
   const errorMessage = 'Что то пошло не так',
         successMessage = 'Спасибо! Мы скоро с вами свяжемся!', 
         allForm = document.querySelectorAll('form'),
         inputPhone = document.querySelectorAll('.form-phone'),
         inputName = document.querySelectorAll('[name=user_name], [name=user_message]'),
         statusMessage = document.createElement('div');

    const applyStyle = () => {
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = `
      .sk-wave {
        width: 6em;
        height: 4em;
        margin: auto;
        text-align: center;
        font-size: 1em;
      }
      
      .sk-wave .sk-rect {
        background-color: #337ab7;
        height: 100%;
        width: .5em;
        display: inline-block;
        -webkit-animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
        animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
      }
      
      .sk-wave .sk-rect-1 {
        -webkit-animation-delay: -1.2s;
        animation-delay: -1.2s;
      }
      
      .sk-wave .sk-rect-2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      
      .sk-wave .sk-rect-3 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }
      
      .sk-wave .sk-rect-4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
      
      .sk-wave .sk-rect-5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
      
      @-webkit-keyframes sk-wave-stretch-delay {
      
        0%,
        40%,
        100% {
          -webkit-transform: scaleY(0.4);
          transform: scaleY(0.4);
        }
      
        20% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
        }
      }
      
      @keyframes sk-wave-stretch-delay {
      
        0%,
        40%,
        100% {
          -webkit-transform: scaleY(0.4);
          transform: scaleY(0.4);
        }
      
        20% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
        }
      }
    `;
    document.head.appendChild(style);
  };
  
         inputName.forEach((elem) => {
             elem.addEventListener('input', () => {
               elem.value = elem.value.replace(/[^а-яё\s]/ig, '');
               });
             });

         inputPhone.forEach((elem) => {
             elem.addEventListener('input', () => {
               elem.value = elem.value.replace(/[^0-9+]/ig, '');
               });
             });

         allForm.forEach((form) => {
            form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = `<div class='sk-wave'>
                                         <div class='sk-rect sk-rect-1'></div>
                                         <div class='sk-rect sk-rect-2'></div>
                                         <div class='sk-rect sk-rect-3'></div>
                                         <div class='sk-rect sk-rect-4'></div>
                                         <div class='sk-rect sk-rect-5'></div>
                                       </div>`;
            applyStyle();                           
            const formData = new FormData(form);
            let body = {};
            // for(let val of formData.entries()){
            //   body[val[0]] = val[1]
            // }
            formData.forEach((val, key) => {
              body[key] = val;
            });
            postData(body, () => {
             const inputs = form.querySelectorAll('input');
             statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe;';
               statusMessage.textContent = successMessage;
               inputs.forEach((elem) => {
                 elem.value = '';
               });
            }, (error) => {
              statusMessage.style.cssText = 'font-size: 2rem; color: red;';
               statusMessage.textContent = errorMessage;
               console.error(error);
            });
            });
         });

        const postData = (body, outputData, errorData) => {
          const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if(request.readyState !== 4) {
                  return;
                }
                if(request.status === 200) {
                  outputData();
                } else {
                  errorData(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            console.log(body);
            request.send(JSON.stringify(body));
        }       
};
sendForm();
});

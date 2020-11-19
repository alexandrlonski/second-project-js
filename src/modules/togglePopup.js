  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn');
    let   popupContent = document.querySelector('.popup-content'),
          count = 100;
          let popupTop = function() {
              popup.style.display = 'block';
               count--;
               if(screen.width >= 768 && count > 10){
                 popupContent.style.top = count +'%';
                 setTimeout(popupTop, 10);  
               } 
            };
          popupBtn.forEach((elem) => {
            elem.addEventListener('click', popupTop );
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

  export default togglePopup;
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
  };

  export default toggleMenu;
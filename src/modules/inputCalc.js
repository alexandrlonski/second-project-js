const inputCalc = () => {
  const input = document.querySelectorAll('.calc-item');
     input.forEach((elem, i) => {
        if (i !== 0) {
        elem.addEventListener('input', () => {
         elem.value = elem.value.replace(/\D/g, '');
          });
        }
       }); 
      }; 

 export default inputCalc;   
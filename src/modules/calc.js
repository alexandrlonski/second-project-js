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
     console.log( totalValue);
     calcBlock.addEventListener('change', (event) => {
         const target = event.target;
         console.log(calcType.options[calcType.selectedIndex].value);
         console.log(calcSquare.value);
        if(target.matches('select') || target.matches('input') ) {
            countSum();
          } 
        if (calcSquare.value < 1 || calcType.options[calcType.selectedIndex].value < 1)  {
            totalValue.textContent = '0';
          }
     });   
};
 export default calc;
// const calc = (price = 100) => {
//   const calcBlock = document.querySelector('.calc-block'),
//         calcType = document.querySelector('.calc-type'),
//         calcSquare = document.querySelector('.calc-square'),
//         calcDay= document.querySelector('.calc-day'),
//         calcCount= document.querySelector('.calc-count'),
//         totalValue = document.getElementById('total'); 

//     const animateValue = (total) => {
//     let count = 0;
//     const animate = setInterval(() => {
//       count += 100;
//       totalValue.textContent = count;
//       if (count >= total) {
//         clearInterval(animate);
//         totalValue.textContent = total;
//       }
//     }, 0);
//     clearInterval(animate - 1);
//   };    
    
//    const countSum = () => {
//       let total = 0,
//           countValue = 1,
//           dayValue = 1,
//           count = 0; 
//       const typeValue = calcType.options[calcType.selectedIndex].value,
//             squareValue = +calcSquare.value;

//       if(calcCount.value > 1){
//         countValue += (calcCount.value - 1) / 10;
//        }
//       if(calcDay.value && calcDay.value < 5) {
//         dayValue *= 2;
//       } else if(calcDay.value && calcDay.value < 10) {
//         dayValue *= 1.5;
//       }
            
//       if(typeValue && squareValue)  {
//         total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
//       } 
      
//       animateValue(total);
//       // let interval;
//       // let numberUp = () => {
//       //     count += 1000;
//       //     if(count <= totalNum){
//       //       totalValue.textContent = count;
//       //       interval = setTimeout(numberUp, 1);
//       //     } else {
//       //       clearTimeout(interval);
//       //       count = 0;
//       //     }
//       //     };
//       //   numberUp();
//     };
//      console.log( totalValue);
//      calcBlock.addEventListener('change', (event) => {
//          const target = event.target;
//         if(target.matches('select') || target.matches('input') ) {
//             countSum();
//           } 
//         if (calcSquare.value < 1 || calcType.options[calcType.selectedIndex].value < 1)  {
//             totalValue.textContent = '0';
//           }
//      });   
// };
//  export default calc;

 const calc = (price = 100) => {
		let calcItem = document.querySelectorAll('.calc-item');
		calcItem = [...calcItem].splice(1, calcItem.length);
		calcItem.forEach(item => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/\D/g, '');
			});
		});

		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcCount = document.querySelector('.calc-count'),
			calcDay = document.querySelector('.calc-day'),
			totalValue = document.getElementById('total');
		let sum = 0,
			total = 0;

		const iterateValue = () => {
			const requestId = requestAnimationFrame(iterateValue);
			if (sum < Math.floor(total)) {
				sum += 100;
				totalValue.textContent = sum;
			} else if  (sum > Math.floor(total)) {
				sum -= 100;
				totalValue.textContent = sum;
			} else {
				cancelAnimationFrame(requestId);
			}
		};

		const countSum = () => {
			let countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;
			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1)  / 10;
			}
			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}
			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			} else {
				total = 0;
			}
			iterateValue();
		};

		calcBlock.addEventListener('change', event => {
			const target = event.target;
			if (target === calcType || target === calcSquare ||
				target === calcCount || target === calcDay) {
				countSum();
			}
		});
	};

export default calc;
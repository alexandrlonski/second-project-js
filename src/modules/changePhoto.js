const changePhoto = () => {
const img = document.querySelectorAll('.command__photo');
  
  img.forEach((elem, index, arr) => {
    let imgOld = elem.src ;
   elem.addEventListener('mouseover', (e) => e.target.src = e.target.dataset.img);
   elem.addEventListener('mouseout', (e) => e.target.src = imgOld);
  });
};
export default changePhoto;
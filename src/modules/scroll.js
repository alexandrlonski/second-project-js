
  const scroll = () => {
  const anchors = document.querySelectorAll('ul li a[href*="#"], [href="#servise-block"]');
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

export default scroll;
const cloudsleftfront= document.querySelector('.clouds-left-front');

const cloudsrigth= document.querySelector('.clouds-rigth');
const cloudsleftback= document.querySelector('.clouds-left-back');
const cloudsback= document.querySelector('.clouds-back');



function funcion_scroll(entrada){
   //aqui es cuando subiran las nubes a la vez que se desvanecen
  
   
   entrada.forEach(entry=>{
    if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        alert("tocaste a la nube");
      } else {
        entry.target.classList.remove('is-visible')
      }
   
   }
   )
}


const option= {
    root: null,
    rootMargin: '-10px',
    threshold:0.0,
}

const observador= new IntersectionObserver(funcion_scroll,option);
observador.observe(cloudsleftfront);

cloudsleftback.forEach(image => {
    observador.observe(image);
});
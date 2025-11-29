let Lista_comentarios=[];

const Comentario={
     coment:' ',
     ruta:' ',
}

const formulario= document.querySelector('#formulario');
const textarea= document.querySelector('#texto');
const Enviar= document.querySelector('#enviar');

formulario.addEventListener('submit', Validar);

function Validar(){
 alert('Se activo el comando Validar correctamente');
 Comentario.coment= textarea.value;

        Agregar_comentario();
   

}

function Validar2(){
    alert('Se activo el comando Validar correctamente');
   
    if(textarea === ''|| puestoInput.value=== ''){
       alert('no has escrito nada aun');
       return
   
    }else{
       alert('preparate');
        Comentario.coment= textarea.value;
   
        Agregar_comentario();
   
    }
   
   
   }
   

function Agregar_comentario(){
    alert('Se activo el comando Agregar_comentario correctamente');
    Lista_comentarios.push({...Comentario});

    mostrar_comentarios();

}

function mostrar_comentarios(){
    alert('Se activo el comando mostrar_comentarios correctamente');
   const divComentarios= document.querySelector('#Contenedor2-comentarios');
    

   Lista_comentarios.forEach( comentario =>{
       const{coment}= comentario;

       const parrafo= document.createElement('p');
       parrafo.textContent=  `${coment}`;
       parrafo.dataset.coment= coment;

       const hr= document.createElement('hr');
       divComentarios.appendChild(parrafo);
       divComentarios.appendChild(hr);

       aumentarAlturaDiv();
       

   });
}
function aumentarAlturaDiv() {
    var altura = document.querySelector('#Contenedor2-comentarios').clientHeight;
    //alert("altura : " + altura);

    const miDiv = document.getElementById("Contenedor2-comentarios");
    miDiv.style.height = (altura+40)+"px" ;
    var altura_actualizada = miDiv.clientHeight;

   // alert("altura actualizada : " + altura_actualizada);


  

  }
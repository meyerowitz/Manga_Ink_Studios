const header= document.querySelector('header');

(function Iniciar_Sesion ( ) {
  
setTimeout(() => {
   const Iniciar_Sesion_Texto= document.createElement('h2');
   const Iniciar_Sesion_removebutton= document.createElement('button');

   Iniciar_Sesion_removebutton.setAttribute("id", "removeButton");
   Iniciar_Sesion_removebutton.onclick = function(){
      removeButton();
   };
   const ImgremoveButton= document.createElement('img');
   ImgremoveButton.src ='quit-icon.png';
   Iniciar_Sesion_Texto.textContent="Iniciar Sesión";

   const hr= document.createElement('hr');
   const hr2= document.createElement('hr');
   const h2_usuario= document.createElement('h2');
   h2_usuario.textContent="Usuario";
   const h2_contraseña= document.createElement('h2');
   h2_contraseña.textContent="Contraseña";
   const h3_olvidocontraseña= document.createElement('a');
   h3_olvidocontraseña.textContent="Se te olvido la contraseña?";
   const h3_Registrarse= document.createElement('a');
   h3_Registrarse.textContent="Registrarse";
   const Input_usuario= document.createElement('input');
   const Input_contraseña= document.createElement('input');
   const Iniciar_Sesion_div= document.createElement('div');
   const Iniciar_Sesion_div2= document.createElement('div');
   const Iniciar_Sesion_div3= document.createElement('div');
   const Iniciar_Sesion_div4= document.createElement('div');
   const Iniciar_Sesion_div5= document.createElement('div');
   const Iniciar_Sesion_div_shadown= document.createElement('div');

   Input_usuario.setAttribute("id","Input_usuario");
   Input_contraseña.setAttribute("id","Input_contraseña");
   Iniciar_Sesion_div.setAttribute("id", "Iniciar_Sesion_div");
   Iniciar_Sesion_div2.setAttribute("id", "Iniciar_Sesion_div2");
   Iniciar_Sesion_div3.setAttribute("id", "Iniciar_Sesion_div3");
   Iniciar_Sesion_div4.setAttribute("id", "Iniciar_Sesion_div4");
   Iniciar_Sesion_div5.setAttribute("id", "Iniciar_Sesion_div5");
   Iniciar_Sesion_div_shadown.setAttribute("id", "Iniciar_Sesion_div_shadown");
  

   Iniciar_Sesion_div5.appendChild(h3_olvidocontraseña);
   Iniciar_Sesion_div5.appendChild(h3_Registrarse);
   Iniciar_Sesion_div3.appendChild(h2_usuario);
   Iniciar_Sesion_div3.appendChild(Input_usuario);
   Iniciar_Sesion_div3.appendChild(h2_contraseña);
   Iniciar_Sesion_div3.appendChild(Input_contraseña);
   Iniciar_Sesion_div3.appendChild(Iniciar_Sesion_div5);
   Iniciar_Sesion_div.appendChild(Iniciar_Sesion_div2);
   Iniciar_Sesion_div2.appendChild(Iniciar_Sesion_Texto);
   Iniciar_Sesion_div2.appendChild(Iniciar_Sesion_removebutton);
   Iniciar_Sesion_div.appendChild(hr);
   Iniciar_Sesion_div.appendChild(Iniciar_Sesion_div3);
   Iniciar_Sesion_div.appendChild(hr2);
   Iniciar_Sesion_div.appendChild(Iniciar_Sesion_div4);
   Iniciar_Sesion_removebutton.appendChild(ImgremoveButton);

   
   header.appendChild(Iniciar_Sesion_div_shadown);
   header.appendChild(Iniciar_Sesion_div);

 }, 3000);
 
}) ( );


function removeButton(){

  header.removeChild(Iniciar_Sesion_div);
  header.removeChild(Iniciar_Sesion_div_shadown);

}

function animatic1(){
   const animaticc1 =document.getElementById("Iniciar_Sesion_div").animate([
        {opacity: 1},
        {opacity: 0}
    
      ],{
       easing:"linear",
       iterations:1,
       duration:200,
    
      });
return animaticc1.finished;
}
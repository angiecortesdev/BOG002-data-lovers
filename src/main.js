   //import { pokego } from './data/pokemon/pokemon.json';

   //En esta parte encontraremos el botón de subir


   window.onscroll = function() {
       if (document.documentElement.scrollTop > 550) {
           document.querySelector('.botonup-container').classList.add('mostrar')
       } else {
           document.querySelector('.botonup-container').classList.remove('mostrar')
       }
   }

   document.querySelector('.botonup-container').addEventListener('click', () => {
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       })
   })





   //Esta parte encontraremos el dom del menu responsive
   const btn_menu = document.querySelector('.btn_menu')
   if (btn_menu) {
       btn_menu.addEventListener("click", () => {
           const menu_items = document.querySelector('.menu_items')
           menu_items.classList.toggle('show')
       })
   }

   //Aqui va el ordernar y filtrar la data



   document.getElementById("selectByType").addEventListener("change", () => {
       document.getElementById("pokego_container").innerHTML = " "
   });




   //Aqui Ordenaremos la data







   //En esta parte encontraremos el fetch


   fetch()
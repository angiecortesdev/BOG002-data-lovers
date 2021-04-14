  //import {  } from './data.js';




  //Esta parte encontraremos el dom del menu responsive
  const btn_menu = document.querySelector('.btn_menu')
  if (btn_menu) {
      btn_menu.addEventListener("click", () => {
          const menu_items = document.querySelector('.menu_items')
          menu_items.classList.toggle('show')
      })
  }


  //En esta parte encontraremos el fetch


  // Obtenemos los datos de todos los pokemon 
  fetch('./data/pokemon/pokemon.json')
      .then(response => response.json())
      .then(json => {
          pintarPokemon(json.pokemon);
      });

  // Pinta todos los pokemos insertando un HTML dentro del #container
  function pintarPokemon(data) {
      //for (let i = 0; i < data.pokemon.length; i++);
      const container = document.getElementById('container')
      let tarjetas_pokemones = "";
      data.forEach(pokemon => {
          tarjetas_pokemones += `
    
    <div class="card">
    <span class="morado"># ${pokemon.num}</span>
    <img src=" ${pokemon.img} "/>
    <p>${pokemon.num}</p>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </div> `;
      });
      container.innerHTML = tarjetas_pokemones
  }
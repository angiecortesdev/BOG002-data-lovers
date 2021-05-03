    //import {filtrarData} from './data.js'
    //import data from './data/pokemon/pokemon.js';

    //---------------------------------BOTÓN SUBIR------------------------------------------------------
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
            //behavior especifica el comportamiento del desplazamiento para un elemento con desplazamiento
            behavior: 'smooth' //smooth La caja se desplaza suavemente,
        })
    })


    //---------------------------------MENÚ RESPONSIVO-----------------------------------------------------


    //Esta parte encontraremos el dom del menu responsive
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener("click", () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

    //-------------------------------------DATA------------------------------------------------------------

    //Aqui Ordenaremos la data
    const pokego_container = document.getElementById('pokego_container');
    const pokemons_number = 150;
    const colors = {
        fire: 'rgb(221, 133, 18)',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#8f3985',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };
    const main_types = Object.keys(colors);

    const fetchPokemons = async() => {
        for (let i = 1; i <= pokemons_number; i++) {
            await getPokemon(i);
        }
    };

    const getPokemon = async id => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        createPokemonCard(pokemon);
    };

    function createPokemonCard(pokemon) {
        const pokeElemento = document.createElement('div');
        pokeElemento.classList.add('pokemones');

        const poke_types = pokemon.types.map(type => type.type.name);
        const type = main_types.find(type => poke_types.indexOf(type) > -1);

        const color = colors[type];

        pokeElemento.style.backgroundColor = color;

        const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${pokemon.name}</h3>
            <small class="type">Type: <span class="tipo">${type}</span></small>
            <span><button>Ver Ficha</button></span>
        </div>
    `;

        pokeElemento.innerHTML = pokeInnerHTML;

        pokego_container.appendChild(pokeElemento);
    }

    fetchPokemons();
    // //-----------------------------------------FICHAS POR POKEMON------------------------------------------------


    // let card_Pokemon = document.getElementsByClassName("pokemones");

    // function abrirFicha(data, card_Pokemon) {
    //     for (let i = 0; i < card_Pokemon.length; i++) {
    //         card_Pokemon[i].addEventListener("click", () => {
    //                 document.getElementById("card_information").innerHTML = ``
    //             }
    //         }

    //         //-----------------------------------------FILTRAR------------------------------------------------

    //         //Aqui encontraremos el filtrar
    //         let pokemon;

    //         document.getElementById('selectByType').addEventListener("change", () => {
    //             document.getElementById("pokego_container").innerHTML = ""
    //             let tipos = document.getElementById("selectByType").value
    //             for (let i = 0; i < window.poke2.filterData(pokemon.pokemon, tipos).length; i++) {
    //                 document.getElementById("pokego_container").innerHTML = `
    //         <div class="img-container">
    //         <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
    //     </div>
    //     <div class="info">
    //         <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
    //         <h3 class="name">${pokemon.name}</h3>
    //         <small class="type">Type: <span>${pokemon.type}</span></small>
    //         <span><button id="card_information">Ver Ficha</button></span>
    //     </div>
    //         `
    //             }
    //             abrirFicha(window.pokego2.filterData(pokemon.pokemon, tipos), card_Pokemon);
    //         });
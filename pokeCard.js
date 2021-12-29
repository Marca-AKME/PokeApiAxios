import { getData } from "/pokeApiAxios.js";
import { pokeTypes } from "/pokeTypes.js";

async function dataCard(){
    
    //const limitPokecards = await getData(pokemonId)

    for (let pokemonId = 0; pokemonId < 20; pokemonId++) {
       
        const pokemonData = await getData(pokemonId, `https://pokeapi.co/api/v2/pokemon/?offset=40&limit=60`)
        
        const arrayTypes = pokemonData.types;
        const pokeType = await pokeTypes(arrayTypes);

        await print(pokemonData, pokeType)

    }
}

async function print(pokemonData, pokeTypes){

    let localizacion = document.getElementById('card');
    
    localizacion.innerHTML += `
        <div class="col">
            <div class="card";">
                <img src="${pokemonData.sprites.front_default}" class="card-img-top" alt="${pokemonData.name}">
                <div class="card-body">
                    <h5 class="card-title">${pokemonData.name}</h5>
                    <p class="card-text">${pokeTypes}</p>
                    <a href="https://www.pokemon.com/es/pokedex/${pokemonData.name}" target="_blank" class="btn btn-primary">+Info</a>
                </div>
            </div>
        </div>`
}

dataCard()
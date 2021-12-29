export const getData = async (pokemonId, URL) => {

    //let URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;

    //if (pokemonId >= limit) return console.log("El pokemonId es superior o igual al limit.");
    
    try {

       const response = await axios(URL) 

       const pokemones = response.data.results;

       let pokemonURLs = [];
       pokemones.forEach(pokemon => {   
           pokemonURLs.push(pokemon.url)
       });

       const dataPokemon = await axios(pokemonURLs[pokemonId])
       
       console.log(response.data.next)

       return dataPokemon.data;
    
    } catch (error) {
        
        console.log("Esto no Funca")

    }
}

//getData(80, 0);




//    const data = await response.json()
    
//   const responseDataResult = await axios(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${response.data}`)  
//    const dataUser = await responseUser.json()
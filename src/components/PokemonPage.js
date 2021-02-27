import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, setPokemon, setSearchQuery}) {
    // const [searchQuery, setSearchQuery] = useState("")
    // console.log(searchQuery)

    // const pokeDex = pokemon.filter((poke) => {
    //   const name = poke.name
    //   return (
        
    //     console.log(name.includes(searchQuery)
    //   )
    // console.log(searchQuery.includes(poke.name))
    
    // console.log(poke.name)
    // poke.name.includes(searchQuery)
    // }
    // )
    

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search setSearchQuery = {setSearchQuery}/>
      <br />
      <PokemonCollection pokemon={pokemon}/>
    </Container>
  );
}

export default PokemonPage;

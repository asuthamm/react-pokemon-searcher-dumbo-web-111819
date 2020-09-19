import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    
    let arrOfPokemon = this.props.collection.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)

    // console.log(this.props.collection)
    return (
      <Card.Group itemsPerRow={6}>
      {  arrOfPokemon }
      </Card.Group>
    )
  }
}

export default PokemonCollection
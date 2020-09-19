import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    collection: [],
    searchTerm: 'x'
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(obj => this.setState({
        collection: obj
      }))
  }
  
  handleInput = (searchStr) => {
    this.setState({
      searchTerm: searchStr
    })
  }

  filterArrToRender = () => {
    // return this.state.collection
    let filterArray = this.state.collection.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return filterArray
  }

  handleSubmitOfForm = (pokeObj) => {
    console.log(pokeObj)
    let copyOfObj = { 
      name: pokeObj.name,
      sprites: { front: pokeObj.frontUrl , back:pokeObj.backUrl  },
      stats: [{name: 'hp', value: parseInt(pokeObj.hp)}]              
    }
    let addedArray = [...this.state.collection, copyOfObj]
    this.setState({
      collection: addedArray
    })
  }

  render() {
    // console.log(this.state)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmitOfForm={this.handleSubmitOfForm}/>
        <br />
        <Search searchTerm={this.state.searchTerm} handleInput={this.handleInput} />
        <br />
        {/* <PokemonCollection collection={this.state.collection} /> */}
        <PokemonCollection collection={this.filterArrToRender()} />
      </Container>
    )
  }
}

export default PokemonPage

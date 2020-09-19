import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.PureComponent {

  state = {
    flipped: false
  }

  handleFlip = () => {
    
    const newFlipValue  = !this.state.flipped
    // console.log(newFlipValue)
    this.setState({
      flipped: newFlipValue
    })
  }

  render() {
    // console.log(this.props)
    let {name, stats, sprites} = this.props.pokemon
    let { front, back } = sprites
    let hpObj = stats.find(obj => obj.name === 'hp').value
    // console.log(hpObj)
 
    return (
      <Card onClick={this.handleFlip}>
        <div>
          <div className="image">
            <img src={ this.state.flipped ? back : front} alt={name} />

          </div>
          <div className="content">
          <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObj}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard




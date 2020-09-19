import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '1',
      hp: 0,
      frontUrl: '3',
      backUrl: '4'
    }
  }

  handleInputs = (e) => {
    // console.log(e.ta rget.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.handleSubmitOfForm(this.state)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleInputs} fluid label="Name" value={this.state.name} placeholder="Name" name="name" />
            <Form.Input onChange={this.handleInputs} fluid label="hp" value={this.state.hp} placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleInputs} fluid label="Front Image URL" value={this.state.frontUrl} placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleInputs} fluid label="Back Image URL" value={this.state.backUrl}placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

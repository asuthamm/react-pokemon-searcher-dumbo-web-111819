import React, { Component } from 'react';

class Search extends Component {

  handleDynamicChange = (e) => {
    // console.log(e.target.value)
    this.props.handleInput(e.target.value)
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt"  value={this.props.searchTerm} onChange={this.handleDynamicChange} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search;

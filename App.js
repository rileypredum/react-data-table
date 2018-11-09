import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {

    return(
      <div className="container">
        <h1>React Table Tutorial</h1>
        <p> Add a character with a name and a job to the table.</p>
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add new</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

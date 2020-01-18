import React, { Component } from "react";
import AddColorForm from "./addColorForm";
import ColorsList from "./colorsList";
import { v4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: []
    };

    this.addNewColor = this.addNewColor.bind(this);
  }

  addNewColor(title, hexCode) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        hexCode,
        rating: 0
      }
    ];

    this.setState({ colors });
  }

  render() {
    const { colors } = this.state;

    return (
      <div>
        <header>
          <h1>Colors manager</h1>
        </header>
        <main>
          <AddColorForm onColorAdded={this.addNewColor} />
          <ColorsList colors={colors} />
        </main>
      </div>
    );
  }
}

export default App;

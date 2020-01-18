import React, { Component } from "react";
import AddColorForm from "./addColorForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: []
    };

    this.addNewColor = this.addNewColor.bind(this);
  }

  addNewColor(title, hexCode) {
    console.log(title, hexCode);
  }

  render() {
    const { colors } = this.state;

    return (
      <div>
        <header>
          <h1>Colors manager</h1>
        </header>
        <main>
          <AddColorForm onColorAdded={f => f} />
          <pre>{JSON.stringify(colors, null, 2)}</pre>
        </main>
      </div>
    );
  }
}

export default App;

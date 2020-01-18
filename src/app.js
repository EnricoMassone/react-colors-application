import React from "react";
import { render } from "react-dom";
import AddColorForm from "./addColorForm";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <h1>Colors manager</h1>
        </header>
        <main>
          <AddColorForm onColorAdded={f => f} />
        </main>
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);

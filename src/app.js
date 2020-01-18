import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div className="app">
        <header>
          <h1>Hello from the template!</h1>
        </header>
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);

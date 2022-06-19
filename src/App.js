import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import Todos from "./components/Todo/Todos";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React using class component</h1>
        <br />
        <hr />
        <br />
        {/* <Counter /> */}
        <Todos />
      </div>
    );
  }
}

export default App;

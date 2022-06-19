import React from "react";
import SingleTodo from "./SingleTodo";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      todoData: [],
    };
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuery(e) {
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      query: this.state.query,
      status: false,
      id: this.state.todoData.length,
    };
    this.setState({ todoData: [...this.state.todoData, payload] });
    this.setState({ query: "" });
  }

  render() {
    console.log(this.state.todoData);
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter todos..."
            value={this.state.query}
            onChange={(e) => this.handleChangeQuery(e)}
          />
          <button type="submit">Add</button>
        </form>
        <div style={{ paddingTop: "20px" }}>
          {this.state.todoData.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <SingleTodo item={item} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Todos;

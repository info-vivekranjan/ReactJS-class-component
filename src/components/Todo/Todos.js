import React from "react";
import SingleTodo from "./SingleTodo";
import { data } from "./data";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      todoData: data || [],
    };
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
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

  deleteTodo(id) {
    const updateData = this.state.todoData.filter((item) => item.id !== id);
    this.setState({ todoData: updateData });
  }

  toggleTodo(id) {
    const updateData = this.state.todoData.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    this.setState({ todoData: updateData });
  }

  render() {
    console.log(this.state.todoData);
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Todos</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Enter todos..."
            value={this.state.query}
            onChange={(e) => this.handleChangeQuery(e)}
            aria-label="default input example"
            style={{ width: "300px" }}
          ></input>
        </form>
        <div style={{ paddingTop: "20px" }}>
          {this.state.todoData.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <SingleTodo
                  item={item}
                  deleteTodo={this.deleteTodo}
                  toggleTodo={this.toggleTodo}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Todos;

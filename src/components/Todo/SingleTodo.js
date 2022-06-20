import React from "react";

class SingleTodo extends React.Component {
  render() {
    const { item, deleteTodo, toggleTodo } = this.props;

    return (
      <div
        style={{
          width: "30%",
          margin: "10px auto",
        }}
        className="card"
      >
        <div className="card-body">
          <h5>{item.id}</h5>
          <h5 className="card-title">{item.query}</h5>
          <h6 className="card-title">{item.status ? "Done" : "Pending"}</h6>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => deleteTodo(item.id)}
            style={{ marginRight: "10px" }}
          >
            delete
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => toggleTodo(item.id)}
          >
            toggle
          </button>
        </div>
      </div>
    );
  }
}

export default SingleTodo;

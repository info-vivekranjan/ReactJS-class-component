import React from "react";

class SingleTodo extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          width: "30%",
          margin: "10px auto",
        }}
      >
        <h4>{item.id}</h4>
        <h4>{item.query}</h4>
        <h4>{item.status ? "Done" : "Pending"}</h4>
      </div>
    );
  }
}

export default SingleTodo;

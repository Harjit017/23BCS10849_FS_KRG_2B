import React from "react";
import Child from "./Child";

function Parent({ message }) {
  return (
    <div className="parent-container">
      <h2>Parent Component</h2>
      {}
      <Child message={message} />
    </div>
  );
}

export default Parent;

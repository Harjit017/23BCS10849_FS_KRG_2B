import React from "react";

function Child({ message }) {
  return (
    <div className="child-container">
      <h3>Child Component</h3>
      <p className="message-text">Message from App: {message}</p>
    </div>
  );
}

export default Child;

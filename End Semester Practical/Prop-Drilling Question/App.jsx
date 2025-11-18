import React from "react";
import Parent from "./Parent";
import "./App.css";

function App() {
  const message = "Hello from App component";

  return (
    <div className="app-container">
      <h1>Prop Drilling Example</h1>
      <Parent message={message} />
    </div>
  );
}

export default App;

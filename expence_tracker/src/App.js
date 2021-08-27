import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Board />
      </div>
    </div>
  );
}

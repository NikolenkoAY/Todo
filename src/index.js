import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header.js";
import SearchPanel from "./components/search-panel.js";
import TodoList from "./components/todo-list.js";

const App = () => {
  const todoDate = [
    { label: "Drink Coffe", important: false },
    { label: "Learn React", important: true },
    { label: "Build App", important: true }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoDate} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

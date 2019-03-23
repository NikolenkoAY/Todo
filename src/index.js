import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header.js";
import SearchPanel from "./components/search-panel.js";
import TodoList from "./components/todo-list.js";
import ItemStatusFilter from "./components/item-status-filter.js";

import "./index.css";

const App = () => {
  const todoDate = [
    { label: "Drink Coffe", important: false, id: 0 },
    { label: "Learn React", important: true, id: 1 },
    { label: "Build App", important: true, id: 2 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoDate} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

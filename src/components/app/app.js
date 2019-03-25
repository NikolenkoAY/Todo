import React from "react";


import AppHeader from "../app-header";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

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



export default App;
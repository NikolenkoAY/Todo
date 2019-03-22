import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header.js";
import SearchPanel from "./components/search-panel.js";
import TodoList from "./components/todo-list.js";

const App = () => {
  const todoDate = [
    { label: "Drink Coffe", important: false, id:0 },
    { label: "Learn React", important: true, id:1 },
    { label: "Build App", important: true, id:2 },
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

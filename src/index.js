import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  return (
    <ul>
      <li>Create App</li>
      <li>Create cool App</li>
    </ul>
  );
};

const AppHeader = () => <h1>My Todo list</h1>;

const SearchPanel = () => <input placeholder="search" />;

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

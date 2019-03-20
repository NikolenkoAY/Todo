import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  const items = ["Learn React", "Create App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => <h1>My Todo list</h1>;

const SearchPanel = () => {
  const searchText = "Type to search";
  const searchStyle = {
    fontSize: "15px"
  };

  return <input style={searchStyle} placeholder={searchText} />;
};

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

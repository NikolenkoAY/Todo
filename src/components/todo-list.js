import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = () => {
  const items = ["Learn React", "Create App"];
  return (
    <ul>
      <li>
        <TodoListItem label="Drink Coffe" />
      </li>
      <li>
        <TodoListItem important label="Create " />
      </li>
    </ul>
  );
};

export default TodoList;

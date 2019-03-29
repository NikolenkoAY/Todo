import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, filter }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    const All = filter[0].active
    const Active = filter[1].active
    const Done = filter[2].active

    if (All) {
      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      );
    }

    if (Done == itemProps.done) {
      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      );
    }

    if (Active != itemProps.done) {
      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      );
    }
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;

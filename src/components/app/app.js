import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  maxId = 0;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffe"),
      this.createTodoItem("Learn React"),
      this.createTodoItem("Build App")
    ],
    filter: [
      { active: true, value: "All", id: 0 },
      { active: false, value: "Active", id: 1 },
      { active: false, value: "Done", id: 2 }
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };
  addItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return { todoData: newArr };
    });
  };
  toggleProperty(todoData, id, propName) {
    const idx = todoData.findIndex(el => el.id === id);
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
  }
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };

  render() {
    const { todoData, filter } = this.state;
    const doneCount = todoData.filter(e => e.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter filter={filter} />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} text="text" />
      </div>
    );
  }
}

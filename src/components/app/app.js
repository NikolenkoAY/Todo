import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      { label: "Drink Coffe", important: false, done: true, id: 0 },
      { label: "Learn React", important: true, done: true, id: 1 },
      { label: "Build App", important: true, done: true, id: 2 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };
  addItem = text => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };
    this.setState(({ todoData }) => {
      console.log({ todoData });
      const newArr = [...todoData, newItem];
      return { todoData: newArr };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      console.log(todoData[idx].important);
      return { todoData };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      console.log(idx);
      return { todoData };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

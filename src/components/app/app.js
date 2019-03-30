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
      this.createTodoItem("Build App"),
      {
        label: "test",
        important: false,
        done: true,
        id: this.maxId++
      }
    ],
    filter: "all",
    searchQuery: ""
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }
  toCleanStateArray = () => {
    this.setState(({ filter }) => {
      const dirtyArray = filter;
      const cleanArray = dirtyArray.map(e => (e = { ...e, active: false }));
      return { filter: cleanArray };
    });
  }; // it is usen't

  toggleProperty(todoData, id, propName) {
    const idx = todoData.findIndex(el => el.id === id);

    const oldItem = todoData[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
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

  onSearchChange = searchQuery => {
    this.setState({ searchQuery });
  };
  onFilterChange = filter => {
    this.setState({ filter });
  };

  search(items, searchQuery) {
    if (searchQuery.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }
  filter(items, filter) {
    switch (filter) {
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, searchQuery, filter } = this.state;
    const visibleItems = this.filter(
      this.search(todoData, searchQuery),
      filter
    );
    const doneCount = todoData.filter(e => e.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdded={this.addItem} text="text" />
      </div>
    );
  }
}

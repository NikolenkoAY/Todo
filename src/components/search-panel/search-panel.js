import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    searchQuery: ""
  };

  onLabelChange = e => {
    this.setState({ searchQuery: e.target.value });
    this.props.onSearchChange(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        onChange={this.onLabelChange}
        value={this.state.label}
      />
    );
  }
}

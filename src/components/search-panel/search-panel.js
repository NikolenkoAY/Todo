import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  onLabelChange = e => {
    this.props.enterTerm(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        onChange={this.onLabelChange}
      />
    );
  }
}

import React, { Component } from "react";

import FilterButton from "./filter-button";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    const { filter } = this.props;

    const elements = filter.map(item => {
      const { id } = item;
      return (
        <div className="btn-group" key={id}>
          <FilterButton {...item} />
        </div>
      );
    });
    return <div className="btn-group">{elements}</div>;
  }
}

/*          <button
          type="button"
          className="btn btn-info"
          onClick={e => console.log(e.target.className)}
        >
          All
        </button>
        <button type="button" id="2" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" id="3" className="btn btn-outline-secondary">
          Done
        </button> */

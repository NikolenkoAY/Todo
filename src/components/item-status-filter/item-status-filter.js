import React, { Component } from "react";

//import FilterButton from "./filter-button";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    const buttons = this.props.filter.map(item => {
      const { active, value, id } = item;

      let className = "";
      if (active) {
        className = "btn  btn-info";
      } else {
        className = "btn  btn-outline-secondary";
      }

      return (
        <div className="btn-group" key={id}>
          <button
            type="button"
            className={className}
            onClick={() => this.props.onFilterActive(id)}
          >
            {value}
          </button>
        </div>
      );
    });

    return <div className="btn-group">{buttons}</div>;
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
        </button>


                  <FilterButton {...item} />
        */

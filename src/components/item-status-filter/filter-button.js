import React from "react";

const FilterButton = ({ active, value, id }) => {
  let className = "";
  if (active) {
    className = "btn  btn-info";
  } else {
    className = "btn  btn-outline-secondary";
  }
  return (
    <button type="button" key={id} className={className}>
      {value}
    </button>
  );
};
export default FilterButton;

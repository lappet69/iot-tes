import React from "react";

const Filter = () => {
  return (
    <div className="filter-container">
      <select rowSpan={"20"}>
        <option>All Units</option>
      </select>
      <select>
        <option>All Devices Type</option>
      </select>
    </div>
  );
};

export default Filter;

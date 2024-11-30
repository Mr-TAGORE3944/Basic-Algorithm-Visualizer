"use client";
import React from "react";

const SimpleSelect = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("0");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    props.onAlgoChanged(event.target.value);
  };

  return (
    <div style={{ margin: "10px", minWidth: "120px" }}>
      <label
        htmlFor="algorithm-select"
        style={{ display: "block", marginBottom: "5px" }}
      >
        Algorithm
      </label>
      <select
        id="algorithm-select"
        value={selectedValue}
        onChange={handleChange}
        style={{ padding: "5px", width: "100%" }}
      >
        {props.items.map((item, itemidx) => (
          <option key={itemidx} value={itemidx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SimpleSelect;

import React from "react";

const SimpleSelect = (props) => {
  const [age, setAge] = React.useState("0");
  const [state, setState] = React.useState({
    pos: props.pos,
  });

  const handleChange = (event) => {
    console.log(state.pos);
    setAge(event.target.value);
    props.onAlgoChanged(state.pos, event.target.value);
  };

  return (
    <div className="ml-2 mr-2">
      <label
        htmlFor="algorithm-select"
        style={{ display: "block", marginBottom: "8px" }}
      >
        Algorithm
      </label>
      <select
        id="algorithm-select"
        value={age}
        onChange={handleChange}
        style={{ padding: "8px", minWidth: "120px" }}
      >
        <option value={0} selected={age === "0"}>
          Bubble Sort
        </option>
        <option value={1} selected={age === "1"}>
          Selection Sort
        </option>
        <option value={2} selected={age === "2"}>
          Insertion Sort
        </option>
      </select>
    </div>
  );
};

export default SimpleSelect;

import React from "react";

export default function RangeSlider(props) {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event) => {
    const newValue = [
      Number(event.target.value[0]),
      Number(event.target.value[1]),
    ];
    setValue(newValue);
  };

  const handleCommit = (event) => {
    console.log(value);
  };

  return (
    <div style={{ width: "200px" }}>
      <input
        type="range"
        min="0"
        max="100"
        value={value[0]}
        onChange={(e) =>
          handleChange({ target: { value: [e.target.value, value[1]] } })
        }
        style={{ width: "100%", marginBottom: "10px" }}
        disabled={props.disable}
        onMouseUp={handleCommit}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={value[1]}
        onChange={(e) =>
          handleChange({ target: { value: [value[0], e.target.value] } })
        }
        style={{ width: "100%", marginBottom: "10px" }}
        disabled={props.disable}
        onMouseUp={handleCommit}
      />
      <div>
        Value range: {value[0]} - {value[1]}
      </div>
    </div>
  );
}

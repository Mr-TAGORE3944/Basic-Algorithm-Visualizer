import React from "react";

function valuetext(value) {
  return `${value}`;
}
export default function DiscreteSlider(props) {
  // let count = 0;
  const handleChange = (event) => {
    const num = parseInt(event.target.value, 10);
    // count = num;
    props.onCountChange(num);
  };

  return (
    <div className="hidden lg:block" style={{ width: "200px" }}>
      <input
        type="range"
        defaultValue={props.default}
        step={props.step}
        min={props.min}
        max={props.max}
        onChange={handleChange}
        disabled={props.disable}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <div>{props.title}</div>
      {/* <div>Current Value: {valuetext(count)}</div> */}
    </div>
  );
}

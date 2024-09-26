import React from "react";

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const handleChange = (event) => {
    const num = parseInt(event.target.value, 10);
    props.onChange(num);
  };

  return (
    <div className="flex gap-2 flex-col font-semibold capitalize justify-center items-center">
      <label htmlFor="discrete-slider">{props.title}</label>
      <input
        className=""
        type="range"
        id="discrete-slider"
        defaultValue={props.default}
        step={props.step}
        min={props.min}
        max={props.max}
        onChange={handleChange}
        disabled={props.isDisabled}
      />
      <div>{valuetext(props.default)}</div>
    </div>
  );
}

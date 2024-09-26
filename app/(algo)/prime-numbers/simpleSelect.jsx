import React from "react";

const SimpleSelect = (props) => {
  const [age, setAge] = React.useState("0");
  const [state, setState] = React.useState({
    pos: props.pos,
  });

  const handleChange = (event) => {
    console.log("aa ", event.target.value);
    setAge(event.target.value);
    props.onAlgoChanged(state.pos, event.target.value);
  };

  return (
    <div className="px-4 py-2 flex gap-2 ">
      <label htmlFor="task-select" className="font-semibold tracking-wide ">
        Task
      </label>
      <select
        id="task-select"
        value={age}
        onChange={handleChange}
        className=" px-2 rounded-md font-semibold tracking-wide"
      >
        <option value={0}>Seive</option>
        {/* <option value={1}>Archimedes Spiral</option> */}
        {/* <option value={3}>Bitwise AND</option> */}
        {/* <option value={4}>Bitwise OR</option> */}
      </select>
    </div>
  );
};

export default SimpleSelect;

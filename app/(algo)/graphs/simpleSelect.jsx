import { Select } from "@/components/ui/select";
import React from "react";

const SimpleSelect = (props) => {
  const [age, setAge] = React.useState("0");
  const [state, setState] = React.useState({
    pos: props.pos,
  });

  const handleChange = (event) => {
    console.log(state.pos);
    setAge(event.target.value);
    props.onValueChanged(state.pos, event.target.value);
  };

  return (
    <div className="px-4 py-2 flex gap-2 ">
      <label htmlFor="simple-select" className="font-semibold tracking-wide ">
        {props.label}
      </label>
      <select
        className=" px-2 rounded-md font-semibold tracking-wide"
        id="simple-select"
        value={age}
        onChange={handleChange}
      >
        {props.items.map((item, cellidx) => {
          return (
            <option key={cellidx} value={cellidx}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SimpleSelect;

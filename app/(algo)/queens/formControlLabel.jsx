import React from "react";

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.onDoubleChange(event.target.checked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label htmlFor="switchA" style={{ marginRight: "10px" }}>
        Duo
      </label>
      <input
        id="switchA"
        type="checkbox"
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        disabled={props.disable}
      />
    </div>
  );
}

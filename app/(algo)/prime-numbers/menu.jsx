import React, { Component } from "react";
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
  render() {
    return (
      <nav className="nav  flex lg:gap-6  gap-2 h-fit items-center  lg:p-4 bg-green-400 lg:flex-row  lg:justify-normal justify-center  pb-1 lg:pb-0 w-[100%] flex-wrap ">
        <button
          className="btn bg-green-600 px-2 py-1  rounded-lg text-white font-semibold tracking-wider"
          onClick={this.props.onRefresh}
          disabled={this.props.isDisabled}
          style={this.isClickable()}
        >
          Refresh
        </button>
        <SimpleSelect pos={0} onAlgoChanged={this.props.setAlgo} />
        <DiscreteSlider
          onChange={this.props.onChangeSpeed}
          title="speed"
          marks={false}
          default={10}
          step={1}
          min={10}
          max={50}
          isDisabled={false}
        />
        <DiscreteSlider
          onChange={this.props.onChangeValues}
          title="Total Number"
          marks={false}
          default={100}
          step={1}
          min={10}
          max={500}
          isDisabled={this.props.isDisabled}
        />
        <button
          className="btn bg-green-600 px-2 py-1  rounded-lg text-white font-semibold tracking-wider"
          onClick={this.props.onVisualize}
          disabled={this.props.isDisabled}
          style={this.isClickable()}
        >
          Visualize
        </button>
      </nav>
    );
  }
  isClickable = () => {
    if (this.props.isDisabled) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  };
}

export default Menu;

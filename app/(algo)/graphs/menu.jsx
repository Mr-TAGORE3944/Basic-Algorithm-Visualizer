import React, { Component } from "react";
import SimpleSelect from "./simpleSelect";
import Link from "next/link";

class Menu extends Component {
  render() {
    const handleRefresh = () => {
      window.location.reload(); // This will refresh the webpage
    };
    return (
      <nav className="nav  flex lg:gap-4 gap-1 h-fit items-center  lg:p-4 bg-green-400 lg:flex-row flex-col lg:justify-normal justify-center pb-1 lg:pb-0 w-[100%]">
        {/*<DiscreteSlider*/}
        {/*    default={50}*/}
        {/*    min={10}*/}
        {/*    max={100}*/}
        {/*    step={1}*/}
        {/*    title="Speed"*/}
        {/*    onCountChange={this.props.onSpeedChange}*/}
        {/*    disable={false}*/}
        {/*/>*/}
        <Link
          href="/"
          className="bg-sky-500 rounded-lg text-white font-bold px-2 lg:hidden"
        >
          <span>Home</span>
        </Link>
        <div className="flex flex-row">
          <SimpleSelect
            pos={0}
            label={"Task"}
            items={[
              "Fibonacci",
              "Binomial Coefficient",
              "Derangement",
              "Bigmod",
              // "Stirling2",
            ]}
            onValueChanged={this.props.setAlgo}
          />
          <SimpleSelect
            pos={0}
            label={"N"}
            items={[0, 1, 2, 3, 4, 5, 6]}
            onValueChanged={this.props.setN}
          />
          <SimpleSelect
            pos={0}
            label={"R"}
            items={[0, 1, 2, 3, 4, 5, 6]}
            onValueChanged={this.props.setR}
          />
        </div>
        <div className="flex lg:gap-4 gap-2">
          <button
            className="btn bg-green-600 px-2 py-1  rounded-lg text-white font-semibold tracking-wider"
            onClick={handleRefresh}
            disabled={this.props.disable}
          >
            Reset
          </button>

          <button
            className=" bg-green-600 px-2 py-1  rounded-lg text-white font-semibold tracking-wider"
            onClick={this.props.onStart}
            disabled={this.props.disable}
          >
            Visualize
          </button>
        </div>
      </nav>
    );
  }
  isClickable = () => {
    if (this.props.disable) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  };
}

export default Menu;

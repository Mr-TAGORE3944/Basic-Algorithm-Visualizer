"use client";
import React, { Component } from "react";
import DiscreteSlider from "./slider";
import Link from "next/link";

class Menu extends Component {
  render() {
    return (
      <nav className="nav  flex gap-4 h-fit items-center  p-4 bg-green-400">
        <Link
          href="/"
          className="bg-sky-500 rounded-lg text-white font-bold px-2 lg:hidden"
        >
          <span>Home</span>
        </Link>
        <button
          className="btn bg-green-600 px-2 py-1  rounded-lg text-white font-semibold tracking-wider"
          onClick={this.props.onClear}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Clear Board
        </button>

        <DiscreteSlider
          default={4}
          min={1}
          max={8}
          step={1}
          title="Grid size"
          onCountChange={this.props.onCountChange}
          disable={this.props.disable}
        />
        <DiscreteSlider
          default={50}
          min={1}
          max={100}
          step={1}
          title="Speed"
          onCountChange={this.props.onSpeedChange}
        />

        <button
          className="btn
          
          bg-green-600 px-2 py-1  rounded-lg text-white font-semibold tracking-wider"
          onClick={this.props.onViusalize}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Visualize
        </button>
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

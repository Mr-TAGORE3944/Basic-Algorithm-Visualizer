import React, { Component } from "react";
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
  render() {
    return (
      <nav className="flex flex-wrap items-center justify-center bg-gray-100 p-4 space-x-4">
        <SimpleSelect
          onAlgoChanged={this.props.onAlgoChanged}
          items={this.props.algorithms}
        />
        <SimpleSelect
          onAlgoChanged={this.props.onMazeChanged}
          items={this.props.mazes}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded shadow"
          onClick={this.props.onCreateMaze}
        >
          Create Maze
        </button>
        <button
          onClick={this.props.onVisualize}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-2 px-4 rounded shadow"
        >
          Visualize
        </button>
        <button
          onClick={this.props.onClearPath}
          className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-2 px-4 rounded shadow"
        >
          Clear Path
        </button>
        <button
          onClick={this.props.onClearBoard}
          className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-2 px-4 rounded shadow"
        >
          Clear Board
        </button>
      </nav>
    );
  }
}

export default Menu;

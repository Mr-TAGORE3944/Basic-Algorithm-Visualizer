import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="w-full h-fit px-4 py-2 flex justify-between ">
        <span className="font-bold  whitespace-normal tracking-wide uppercase text-center">
          N Queen
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <Link to={"/"}>
                            <span style={{color:"white"}}>
                                Home
                            </span>
                    </Link> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;

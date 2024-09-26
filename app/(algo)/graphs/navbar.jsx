import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="w-full h-fit lg:px-4 lg:py-2 p-1 lg:flex justify-between  hidden ">
        <span className="lg:font-bold  whitespace-normal tracking-wide uppercase text-center  hidden lg:block">
          Recursion Tree
        </span>
        <button
          className="navbar-toggler bg-black"
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

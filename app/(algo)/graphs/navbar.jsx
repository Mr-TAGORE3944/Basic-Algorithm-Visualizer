import Link from "next/link";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="w-full h-fit lg:px-4 lg:py-2 p-1 lg:flex gap-8  hidden ">
        <span className="lg:font-bold  whitespace-normal tracking-wide uppercase text-center  hidden lg:block">
          Recursion Tree
        </span>
        <Link
          href="/"
          className="bg-sky-500 rounded-lg text-white font-bold px-2"
        >
          <span>Home</span>
        </Link>
        {/* <button
          className="navbar-toggler bg-black"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div
          className="collapse navbar-collapse bg-red-500"
          id="navbarSupportedContent"
        > */}
        {/* </div> */}
      </nav>
    );
  }
}

export default Navbar;

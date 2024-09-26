import Link from "next/link";
import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="w-full h-fit lg:px-4 lg:py-2 p-1 lg:flex 
      gap-8 hidden "
      >
        <span className="lg:font-bold  whitespace-normal tracking-wide uppercase text-center  hidden lg:block">
          Sieve
        </span>
        <Link
          href="/"
          className="bg-sky-500 rounded-lg text-white font-bold px-2"
        >
          <span>Home</span>
        </Link>
      </nav>
    );
  }
}

export default Navbar;

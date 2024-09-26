import Link from "next/link";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="w-full h-fit px-4 py-2 flex gap-8">
        <span className="font-bold  whitespace-normal tracking-wide uppercase text-center">
          N Queen
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

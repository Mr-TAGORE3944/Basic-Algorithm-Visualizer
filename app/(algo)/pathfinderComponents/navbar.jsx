"use client";
import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-green-500 text-white px-4  flex items-center gap-10 py-2">
        <span className="text-xl lg:text-2xl font-bold">Pathfinder</span>
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

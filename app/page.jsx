import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const algorithms = [
  {
    name: "Shortest Path",
    description: "Visualize the Shortest path algorithm.",
    link: "#",
    img: "/graph.png",
  },
  {
    name: "Recursion Tree",
    description: "Visualize the Recursion Tree algorithm.",
    link: "/graphs",
    img: "/Recursion.jpg",
  },
  {
    name: "N-Queens",
    description: "Visualize the N-Queens algorithm.",
    link: "/queens",
    img: "/queens.png",
  },
  {
    name: "Prime Numbers",
    description: "Visualize the Prime Numbers algorithm.",
    link: "/prime-numbers",
    img: "/primes.jpg",
  },
];

const AlgorithmCard = ({ algorithm }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-2 object-cover flex flex-col gap-1 relative h-[300px] justify-between">
    <Image src={algorithm.img} alt="img" width={250} height={120} />
    <span>
      <h3 className="text-xl font-semibold text-gray-800 z-10">
        {algorithm.name}
      </h3>
      <p className="text-gray-600 mt-2 mb-4 z-10">{algorithm.description}</p>
    </span>
    <Link
      href={algorithm.link}
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 z-10"
    >
      Visualize
    </Link>
  </div>
);

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100  w-full">
      <header className="text-center mb-12 bg-green-500 w-full py-5">
        <h1 className="text-4xl font-bold text-white tracking-wider">
          Algorithm Visualizer
        </h1>
        <p className="text-lg text-white tracking-wide mt-4">
          Explore and understand algorithms through visualizations
        </p>
      </header>

      <section className="flex flex-wrap justify-evenly gap-8">
        {algorithms.map((algo, index) => (
          <AlgorithmCard key={index} algorithm={algo} />
        ))}
      </section>
    </div>
  );
}
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-purple-800  text-white h-16 px-3 flex justify-between items-center">
      <div className="logo font-bold">Shortenizer</div>
      <ul className=" flex gap-4 justify-center items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/generate">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/generate">
            <button className="text-white bg-gradient-to-br from-purple-400 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2 text-center leading-5 rounded-2xl">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="text-white bg-gradient-to-br from-purple-400 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2 text-center leading-5 rounded-2xl">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

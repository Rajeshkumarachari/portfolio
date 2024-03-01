import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "certification",
    },
    {
      id: 6,
      link: "contact",
    },
  ];
  return (
    <div className=" flex justify-between items-center w-full h-20 text-white fixed  bg-gray-600 px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2 cursor-pointer">
          K . Rajesh
        </h1>
      </div>
      <ul className=" hidden md:flex ">
        {links.map((l) => (
          <li
            key={l.id}
            className="px-4  capitalize font-medium  text-gray-200 hover:text-blue-200 cursor-pointer  hover:scale-105  duration-200 "
          >
            <Link to={l.link} smooth duration={500}>
              {l.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer md:hidden pr-4 z-10 text-gray-200 "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map((l) => (
            <li
              key={l.id}
              className=" px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(false)}
                to={l.link}
                smooth
                duration={500}
              >
                {l.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

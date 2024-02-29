import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
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
      <ul className="flex">
        {links.map((l) => (
          <li
            key={l.id}
            className="px-4  capitalize font-medium  text-gray-200 hover:text-blue-200 cursor-pointer  hover:scale-105 du "
          >
            {l.link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;

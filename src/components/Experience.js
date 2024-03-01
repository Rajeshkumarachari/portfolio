import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import redux from "../assets/redux.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import material from "../assets/material.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      name: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      name: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      name: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nextjs,
      name: "Next JS",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: redux,
      name: " Redux",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: github,
      name: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: tailwind,
      name: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: material,
      name: "Material UI",
      style: "shadow-sky-600",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800  to-black w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="  text-4xl font-bold border-b-4  border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" shadow-md hover:scale-105 duration-500 py-2 rounded-lg "
            >
              <img src={skill.src} alt="html" className=" w-20 mx-auto" />
              <p className=" mt-4"> {skill.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

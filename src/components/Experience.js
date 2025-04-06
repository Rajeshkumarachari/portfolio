import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import nodeCert from "../assets/node.jpeg";
import awsCert from "../assets/aws.png";
import redux from "../assets/redux.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import material from "../assets/material.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: javascript,
      name: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: react,
      name: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: nextjs,
      name: "Next JS",
      style: "shadow-gray-500",
    },
    {
      id: 4,
      src: redux,
      name: " Redux",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: nodeCert,
      name: " Node JS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: awsCert,
      name: "AWS",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: github,
      name: "GitHub",
      style: "shadow-gray-500",
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
    {
      id: 10,
      src: html,
      name: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: css,
      name: "CSS3",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div name="experience" className=" pt-[132%]  sm:pt-[27%]  w-full h-screen">
      <div className=" max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="  text-4xl font-bold border-b-4  border-gray-500 p-2  inline">
            Experience
          </p>
          <div className="mt-6">
            <p className=" font-semibold text-base sm:text-xl">
              TATA CONSULTANCY SERVICES |
              <span className=" text-xs  sm:text-sm">
                {" "}
                ASSISTANT SYSTEMS ENGINEER
              </span>{" "}
              <span className=" ml-[200px] text-base"> Feb 2022 -Present </span>
            </p>
            <ul className=" list-disc ml-5 my-3">
              <li>
                Developed responsive and interactive web applications using
                React JS, JavaScript, Node js, for one of the insurance company
                to analyze the customer data and provide insights to the
                business.
              </li>
              <li></li>
            </ul>
          </div>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={
                " shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                skill.style
              }
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

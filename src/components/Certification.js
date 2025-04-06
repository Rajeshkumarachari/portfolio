import React from "react";
import javascript from "../assets/Certificates/Javascript.png";
import ReactLog from "../assets/Certificates/React.png";
import Node from "../assets/Certificates/node.png";

const Certification = () => {
  return (
    <div
      name="certification"
      className=" pt-[590px] sm:pt-30 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <p className="mx-20 sm:mx-40  text-4xl font-bold inline border-b-4 border-r-gray-400">
        Certifications
      </p>
      <div className="mt-10 mx-5 sm:mx-40 gap-6 grid sm:flex">
        <img
          src={javascript}
          alt="React"
          className=" w-1/3 h-[300px] rounded-md  hover:scale-105 duration-200"
        />
        <img
          src={ReactLog}
          alt="javascript"
          className="w-1/3  h-[300px] rounded-md  hover:scale-105 duration-200"
        />
        <img
          src={Node}
          alt="javascript"
          className="w-1/3  h-[300px] rounded-md  hover:scale-105 duration-200"
        />
      </div>
    </div>
  );
};

export default Certification;

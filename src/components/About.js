import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-[150px] sm:pt-0  w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3 sm:pb-9">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-600 ">
            About me
          </p>
        </div>
        <p className=" text-lg sm:text-xl mt-20 ">
          I graduated from Sri Venkateshwara University in 2021 with a B.Sc. in
          computer science. I began working for TCS. It's been an amazing
          experience for me, and I've learned so much.
        </p>
        <br />
        <p className=" text-lg sm:text-xl">
          I successfully completed{" "}
          <a
            href="https://www.linkedin.com/in/akshaymarch7/"
            className=" text-blue-400  underline"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Akshay saini's
          </a>{" "}
          Namaste Dev React js and JavaScript course. Having hands-on experience
          in creating UI components.
        </p>
      </div>
    </div>
  );
};

export default About;

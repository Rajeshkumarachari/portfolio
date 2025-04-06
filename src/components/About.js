import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="-mt-20 sm:-mt-[20%] w-full h-screen  text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3 sm:pb-9">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-600 ">
            About me
          </p>
        </div>
        <p className=" text-lg sm:text-xl mt-50 ">
          Hi All, i am K Rajesh from Puttur-Andhra Pradesh. I have completed a
          BSc graduate in Computer Science from Sri Venkateshwara University,
          Tirupati. Currently working as a Software Engineer at Tata Consultancy
          Services.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;

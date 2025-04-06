import React from "react";
import hero from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdCloudDownload } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="pt-[200px] sm:pt-0 h-screen w-full ">
      <div className=" max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4  md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white ">
            I'am Front End Developer
          </h2>
          <p className=" text-gray-400 py-4 max-w-md">
            I have 3+ years of professional experience. Specializing in creating
            dynamic and engaging user interfaces using React.js, JavaScript,
            Redux, Next.js, Node js, AWS, HTML, and CSS.
          </p>
          <div className=" flex">
            <button className="group text-white flex w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r  from-blue-600 to-cyan-400">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={24} className=" ml-1" />
              </span>
            </button>
            <a
              href="/Rajesh_Frontend_Developer.pdf"
              target="_blank"
              rel="noreferrer"
              download={true}
            >
              <button className=" sm:hidden flex justify-center  items-center bg-green-600 hover:brightness-95 px-6 h-12 mt-2 mx-12 rounded-md text-white">
                <MdCloudDownload className=" text-xl mr-2" /> Resume
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <img
            src={hero}
            alt="rajesh_profile"
            className=" rounded-2xl mx-auto md:w-full w-[500px] h-[400px] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

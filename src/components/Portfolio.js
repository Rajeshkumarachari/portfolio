import React from "react";
import netflix from "../assets/projectPhotos/netflix.png";
import youtube from "../assets/projectPhotos/youtube.png";
import amazon from "../assets/projectPhotos/amazon.png";
import nike from "../assets/projectPhotos/nike.png";
import outlook from "../assets/projectPhotos/outlook.png";
import parking from "../assets/projectPhotos/parking.png";
import google from "../assets/projectPhotos/google.png";
import multipleprojecta from "../assets/projectPhotos/multipleprojecta.png";
import sampleProject from "../assets/projectPhotos/sampleProjects.png";

const Portfolio = () => {
  const projectDetails = [
    {
      id: 1,
      src: netflix,
      demo: "https://moviesearch-rajesh.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/moviesearch",
    },
    {
      id: 2,
      src: youtube,
      demo: "https://rajeshtube.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/rajeshtube",
    },
    {
      id: 3,
      src: amazon,
      demo: "https://rajeshkumarachari.github.io/youtube/",
      code: "https://github.com/Rajeshkumarachari/youtube",
    },
    {
      id: 4,
      src: nike,
      demo: "https://nike-alpha-five.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/nike",
    },
    {
      id: 7,
      src: google,
      demo: "https://google-search-sigma.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/google-search",
    },
    {
      id: 5,
      src: outlook,
      demo: "https://outlook-six.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/outlook",
    },
    {
      id: 6,
      src: parking,
      demo: "https://parkqwik.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/parkqwik",
    },

    {
      id: 8,
      src: multipleprojecta,
      demo: "https://password-nine-chi.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/password",
    },
    {
      id: 9,
      src: sampleProject,
      demo: "https://projects-delta-ruby.vercel.app/",
      code: "https://github.com/Rajeshkumarachari/projects",
    },
  ];
  return (
    <div
      name="portfolio"
      className="pt-1 sm:pt-24   w-full text-white md:h-[1000px]"
    >
      <div className=" max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 ">
          <p className=" text-4xl font-bold inline  border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6  "> Check out some of my works right here</p>
        </div>
        {/* whole one project start*/}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-12 sm:px-0 ">
          {projectDetails.map((project) => (
            <div
              key={project.id}
              className=" shadow-md  shadow-gray-600 rounded-lg"
            >
              <img
                src={project.src}
                alt="logo"
                className=" rounded-md  duration-200 hover:scale-105 cursor-pointer"
              />
              <div className=" flex items-center  justify-center ">
                <a href={project.code} target="_blank" rel="noreferrer">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* whole one project end*/}
      </div>
    </div>
  );
};

export default Portfolio;

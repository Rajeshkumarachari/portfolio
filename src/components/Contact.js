import React from "react";
import linkedin from "../assets/Linkedlogo.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";

const Contact = () => {
  const contactLogo = [
    {
      id: 1,
      url: linkedin,
      href: "https://www.linkedin.com/in/rajeshk2/",
    },
    {
      id: 2,
      url: gmail,
      href: "mailto:rajesh.karamala23@gmail.com",
    },
    {
      id: 3,
      url: github,
      href: "https://github.com//Rajeshkumarachari",
    },
  ];
  return (
    <div
      name="contact"
      className=" pt-[870px] sm:pt-[400px] md:pt-30 w-full h-screen bg-gradient-to-b from-black to-gray-700 p-4 text-white"
    >
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 ">
          <p className=" text-4xl font-bold inline border-b-4 border-r-gray-400">
            Contact me
          </p>
          <p className=" py-6">
            Feel free to ask anything about
            <span className=" text-blue-400 cursor-pointer hover:text-blue-500">
              Web development
            </span>
          </p>
          <div className=" flex gap-3">
            {contactLogo.map((logo) => (
              <a href={logo.href} key={logo.id}>
                <img
                  src={logo.url}
                  alt="linkedin"
                  className="w-8 h-8 rounded-md"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

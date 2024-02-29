import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaCloudDownloadAlt } from "react-icons/fa";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rajeshk2/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rajeshkumarachari",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: " mailto:rajesh.karamala23@gmailcom",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaCloudDownloadAlt size={30} />
        </>
      ),
      href: "/Rajesh_Frontend_Developer.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" hidden lg:flex  flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map((item) => (
          <li
            key={item.id}
            className={
              "cursor-pointer flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  bg-gray-800  hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              item.style
            }
          >
            <a
              href={item.href}
              className="flex  justify-between items-center w-full text-white"
              download={item.download}
              target="_blank"
              rel="noreferrer"
            >
              {item.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

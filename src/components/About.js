import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-[150px] sm:pt-0 w-full w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3 sm:pb-9">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-600 ">
            About me
          </p>
        </div>
        <p className=" text-lg sm:text-xl mt-20 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          magnam nesciunt sint est laboriosam, voluptatibus distinctio eos illo
          perspiciatis impedit iure quidem, harum quibusdam eaque adipisci
          repellat expedita! Labore, earum neque incidunt, quisquam placeat ab
          amet facere magnam nam reiciendis officiis, corrupti natus quae et est
          nostrum numquam asperiores sequi.
        </p>
        <br />
        <p className=" text-lg sm:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          provident hic consequatur porro facere, tempora, similique dicta autem
          quis nesciunt minima accusantium amet doloribus ea enim odit dolorum
          itaque molestias veniam ad minus, maxime temporibus. Maxime, eaque
          minima, quae porro voluptates debitis voluptate in ipsa id quasi, et
          eligendi. Veniam!
        </p>
      </div>
    </div>
  );
};

export default About;

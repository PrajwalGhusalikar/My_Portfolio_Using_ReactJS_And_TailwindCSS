import React from "react";
import myImg from "../assets/prajval_square.jpg";
const About = () => {
  return (
    <div name="about">
      <div className=" bg-gradient-to-r from-slate-900 to-slate-800  text-center sticky z-5 top-16 sm:top-20  ">
        <h2 className="text-3xl  text-slate-100 font-serif p-2">About Me</h2>{" "}
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-950  w-screen flex md:flex-row flex-col justify-evenly   ">
        <div className="bg-transperant w-screen md:m-3  md:max-w-96   md:min-w-80 md:min-h-80 flex justify-center items-center rounded-xl">
          <img
            className="rounded-2xl m-4 w-60 h-60 md:w-72 md:h-72 border-2  border-opacity-40 border-solid border-white p-1 "
            src={myImg}
            alt="MyImg"

          />
        </div>
        <div className=" flex bg-transparent flex-col  m-5 rounded-xl">
          <h1 className="text-white text-2xl text-center underline font-serif">
            About Me
          </h1>
          <div className=" text-xl sm:text-center md:text-justify text-justify pt-3 font-mono  m-auto sm:w-8/12 text-gray-400">
            I am{" "}
            <span className="text-2xl font-sans pt-2 pb-2 underline text-gray-300">
              Prajwal Ghusalikar
            </span>
            , a full-stack developer based in Chandur Railway, Amravati. I am
            currently pursuing my B.E in Computer Science and Engineering at
            Shri Sant Gajanan Maharaj Collage Of Engineering, Shegaon from Sant
            Gadge Baba Amravati University.
            <h3
              className="text-2xl font-sans pt-2 pb-2 underline
            "
            >
              Which Technologies I use?
            </h3>
            With a keen interest in web development, I specialize in the MERN
            stack, showcasing proficiency in JavaScript, React.js, Node.js, and
            MongoDB. Additionally, my skill set extends to using Tailwind CSS
            for crafting visually appealing and responsive user interfaces.
            <h3 className="text-2xl font-sans pt-2 pb-2 underline">
              Both Backend and Frontend
            </h3>
            Balancing both backend and frontend development, I am enthusiastic
            about contributing to innovative projects and staying at the
            forefront of technological advancements.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

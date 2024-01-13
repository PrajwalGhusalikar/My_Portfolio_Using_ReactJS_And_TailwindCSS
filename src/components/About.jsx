import React from "react";
import myImg from "../assets/prajval_square.jpg";
const About = () => {
  return (
    <div name="about">
      <div className=" bg-gradient-to-r from-slate-900 to-slate-800  text-center ">
        <h2 className="text-4xl  text-slate-100 font-serif p-2">About Me</h2>{" "}
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-950  w-screen flex sm:flex-row flex-col justify-evenly  ">
        <div className="bg-transperant w-screen sm:m-3  sm:max-w-96   sm:min-w-80 sm:min-h-80 flex justify-center items-center rounded-xl">
          <img
            className="rounded-2xl m-4 w-60 h-60 sm:w-72 sm:h-72   "
            src={myImg}
            alt=""
          />
        </div>
        <div className=" flex bg-transparent flex-col  m-5 rounded-xl">
          <h1 className="text-white text-2xl text-center underline font-serif">
            About Me
          </h1>
          <div className=" text-2xl text-justify pt-3 m-auto sm:w-8/12 text-gray-400">
            I am Prajwal Ghusalikar, a full-stack developer based in Chandur
            Railway, Amravati. I am currently pursuing my studies from Sant
            Gadge Baba Amravati University. With a keen interest in web
            development, I specialize in the MERN stack, showcasing proficiency
            in JavaScript, React.js, Node.js, and MongoDB. Additionally, my
            skill set extends to using Tailwind CSS for crafting visually
            appealing and responsive user interfaces. Balancing both backend and
            frontend development, I am enthusiastic about contributing to
            innovative projects and staying at the forefront of technological
            advancements.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

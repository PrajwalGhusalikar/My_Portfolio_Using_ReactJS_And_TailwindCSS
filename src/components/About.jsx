import React from "react";
import myImg from "../assets/prajval_square.jpg";
const About = () => {
  return (
    <div name="about">
      <div className=" bg-gradient-to-r from-slate-900 to-slate-800  text-center sticky z-5 top-16 sm:top-20  ">
        <h2 className="text-3xl  text-slate-100 font-serif p-2">About Me</h2>{" "}
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-950  w-screen flex md:flex-row flex-col justify-between md:justify-center  ">
        <div className=" sm:hidden bg-transperant w-screen md:m-3  md:max-w-96   md:min-w-80 md:min-h-80 flex justify-center items-center rounded-xl">
          <img
            className="rounded-2xl m-4 w-60 h-60 md:w-72 md:h-72 border-2  border-opacity-40 border-solid border-white p-1 "
            src={myImg}
            alt="MyImg"
          />
        </div>
        <div className=" flex bg-transparent flex-col  m-4 rounded-xl">
          <div className=" text-lg sm:text-center text-start p-3 m-auto md:w-auto text-gray-400">
            <section className="my-3 ">
              <h2 className="text-2xl underline py-2 text-slate-300">
                Introduction:
              </h2>

              <p>
                I am{" "}
                <span className="text-xl underline text-white">
                  Prajwal Ghusalikar
                </span>
                , a dynamic and driven Full-Stack Developer currently pursuing
                my Bachelor's degree in Computer Science and Engineering at Shri
                Sant Gajanan Maharaj College Of Engineering, Shegaon affiliated
                with Sant Gadge Baba Amravati University.
              </p>
            </section>

            <section className="my-2 text-start">
              <h2 className="text-2xl underline text-slate-300  py-2">
                Technological Proficiencies:
              </h2>
              <ul className="text-start sm:pl-5">
                <li>
                  <strong>JavaScript:</strong> A language that forms the
                  backbone of my development endeavors, enabling the creation of
                  dynamic and interactive applications.
                </li>
                <li>
                  <strong>React.js:</strong> With a mastery of React.js, I excel
                  in designing and implementing captivating and user-friendly
                  frontend solutions.
                </li>
                <li>
                  <strong>Node.js:</strong> Proficient in Node.js, I build
                  robust and scalable backend systems, ensuring the seamless
                  functionality of web applications.
                </li>
                <li>
                  <strong>MongoDB:</strong> As a database expert, I leverage
                  MongoDB to manage data effectively, providing secure and
                  reliable storage solutions for applications.
                </li>
                <li>
                  <strong>Tailwind CSS:</strong> My skill set extends to
                  crafting visually stunning and responsive user interfaces
                  using Tailwind CSS, adding an aesthetic touch to the user
                  experience.
                </li>
              </ul>
            </section>

            <section className="my-2 text-start">
              <h2 className="text-2xl underline text-slate-300 py-2 ">
                Balancing Backend and Frontend Excellence:
              </h2>
              <p className="sm:pl-6">
                What sets me apart is my ability to seamlessly navigate both
                backend and frontend development. I am enthusiastic about
                contributing my skills to innovative projects, ensuring they not
                only meet but exceed expectations.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

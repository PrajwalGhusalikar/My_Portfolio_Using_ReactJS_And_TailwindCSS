import React from "react";
import myImg from "../assets/prajval_square.jpg";
const Home = () => {
  return (
    <>
      <div name="home" className="w-full pt-16 sm:pt-10 ">
        <div className="bg-gradient-to-r from-cyan-800 to-indigo-950 flex flex-col justify-center h-screen">
          <div className="flex flex-col md:flex-row md:justify-evenly items-center  ">
            <div className="flex flex-col justify-center p-10 md:w-[850px]">
              <div className="px-3 text-white  py-6 text-4xl md:text-6xl">
                I am A Full Stack Developer
              </div>
              <div className="sm:hidden flex flex-col justify-center items-center py-2">
                {" "}
                <img
                  className=" py-2 h-68 min-w-68 rounded-2xl"
                  src={myImg}
                  alt=""
                />
                <h2 className="text-2xl text-white underline p-2">
                  Prajwal Ghusalikar
                </h2>
              </div>
              <div className="text-white px-3 md:text-2xl text-center md:text-start ">
                I am a Front-end (React Developer) and Full-stack (MERN Stack)
                Developer with hands-on experience in creating dynamic and
                responsive web applications.
              </div>
              <div className="h-70  flex flex-col  justify-start my-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
                  Resume
                </button>
                <div className="social-media-links flex justify-start p-4">
                  <div className="mr-2 ">
                    <i className="fa-solid fa-envelope  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl "></i>
                  </div>
                  <div className=" mx-2 ">
                    <a
                      href="https://www.linkedin.com/in/prajwal-ghusalikar-139ab0282/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fa-brands fa-linkedin text-black  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl "></i>
                    </a>
                  </div>
                  <div className="mx-2">
                    <a
                      href="https://www.instagram.com/prajval___100/?igsh=NzcyZHR0enR6OTNs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram text-black  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl "></i>
                    </a>
                  </div>
                  <div className=" mx-2 ">
                    <a
                      href="https://github.com/PrajwalGhusalikar"
                      target="_bank"
                    >
                      <i className="fa-brands fa-github text-black  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex flex-col justify-center items-center sm:min-h-68 sm:min-w-68 m-10">
              {" "}
              <img
                className="min-h-68 min-w-68 border-2 p-2 border-opacity-40 border-solid border-white  rounded-full "
                src={myImg}
                alt=""
              />
              <h2 className="text-2xl text-white underline p-3">
                Prajwal Ghusalikar
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

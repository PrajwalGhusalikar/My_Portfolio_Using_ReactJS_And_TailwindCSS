import React, { useState } from "react";
import myImg from "../assets/prajval_square.jpg";
const Home = () => {
  let [hidden, setHidden] = useState(true);

  return (
    <>
      <div name="home" className="w-full pt-10  ">
        <div className="bg-gradient-to-r from-cyan-800 to-indigo-950 flex flex-col justify-center h-full sm:h-screen">
          <div className="flex flex-col md:flex-row md:justify-evenly items-center  ">
            <div className="flex flex-col justify-center mt-10 sm:mt-0 p-10 md:w-[850px]">
              <div className="px-3 text-white font-serif  py-2 sm:pb-4  text-3xl md:text-6xl">
                I am A Full Stack Developer
              </div>
              <div className="sm:hidden flex flex-col justify-center items-center py-2 ">
                {" "}
                <img
                  className=" py-2 h-68 min-w-68 rounded-2xl border-2 p-2 border-opacity-40 border-solid border-white  "
                  src={myImg}
                  alt=""
                />
                <h2 className="text-2xl text-white p-2 font-bold font-serif">
                  Prajwal Ghusalikar
                </h2>
              </div>
              <div className="text-white px-3 md:text-2xl text-center md:text-start ">
                I am a Front-end (React Developer) and Full-stack (MERN Stack)
                Developer with hands-on experience in creating dynamic and
                responsive web applications.
              </div>
              <div className="h-70  flex flex-col  justify-start my-4">
                <a
                  href="\Prajwal_Ghusalikar_Resume1.pdf"
                  className="w-32"
                  download
                >
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-cyan-950 hover:text-white text-xl hover:font-bold">
                    Resume
                  </button>
                </a>
                <div className="social-media-links flex justify-start p-4 ">
                  <div className="mr-2">
                    <i
                      onClick={() => {
                        hidden === true ? setHidden(false) : setHidden(true);
                      }}
                      className="fa-solid fa-envelope  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl sm:text-4xl "
                    ></i>
                  </div>

                  <div className=" mx-2 ">
                    <a
                      href="https://www.linkedin.com/in/prajwal-ghusalikar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fa-brands fa-linkedin text-black  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl sm:text-4xl "></i>
                    </a>
                  </div>
                  <div className="mx-2">
                    <a
                      href="https://www.instagram.com/prajval___100/?igsh=NzcyZHR0enR6OTNs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram text-black  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl sm:text-4xl "></i>
                    </a>
                  </div>
                  <div className=" mx-2 ">
                    <a
                      href="https://github.com/PrajwalGhusalikar"
                      target="_bank"
                    >
                      <i className="fa-brands fa-github text-black  hover:text-gray-300 hover:font-bold hover:cursor-pointer text-3xl sm:text-4xl "></i>
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:prajwalghusalikar@gmail.com"
                  className={`${
                    hidden ? "hidden" : "block"
                  } select-all font-bold text-sm text-white bg-cyan-950 h-7 w-52 text-center rounded-xl p-1`}
                >
                  {" "}
                  prajwalghusalikar@gmail.com
                </a>
                <h2
                  className={`${
                    hidden ? "block" : "hidden"
                  } select-all font-bold text-sm text-white h-7 w-52 text-center rounded-xl p-1`}
                >
                  {" "}
                </h2>
              </div>
            </div>

            <div className="hidden sm:flex flex-col justify-center items-center sm:min-h-68 sm:min-w-68 m-10">
              {" "}
              <img
                className="min-h-68 min-w-68 border-2 p-2 border-opacity-40 border-solid border-white   rounded-full "
                src={myImg}
                alt=""
              />
              <h2 className="text-2xl text-white font-serif font-bold p-3">
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

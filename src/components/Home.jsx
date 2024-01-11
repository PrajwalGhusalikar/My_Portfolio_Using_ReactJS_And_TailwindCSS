import React from "react";
import myImg from "../assets/prajval_square.jpg";
const Home = () => {
  return (
    <>
      <div className="pt-10">
        <div className="bg-gradient-to-r from-cyan-800 to-indigo-800 flex flex-col justify-center h-screen">
          <div className="flex flex-col md:flex-row md:justify-evenly  ">
            <div className="flex flex-col justify-center p-10 md:w-[850px]">
              <div className="px-3 text-white py-2 text-4xl md:text-6xl">
                I am A Full Stack Developer
              </div>
              <div className="img flex justify-center py-2">
                {" "}
                <img
                  className=" sm:hidden py-2 h-60 w-60  rounded-2xl"
                  src={myImg}
                  alt=""
                />
              </div>
              <div className="text-white px-3 md:text-2xl text-center md:text-start ">
                I am a Front-end (React Developer) and Full-stack (MERN Stack)
                Developer with hands-on experience in creating dynamic and
                responsive web applications.
              </div>
              <div className="h-70  flex flex-col  justify-start my-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded text-white">
                  Portfolio
                </button>
                <div className="social-media-links flex justify-start p-4">
                  <div className="linkdin mr-2 ">
                    <i className="fa-brands fa-linkedin text-black text-3xl"></i>
                  </div>
                  <div className="github mx-2">
                    <i className="fa-brands fa-instagram text-black text-3xl"></i>
                  </div>
                  <div className="twitter mx-2 ">
                    <i className="fa-brands fa-github text-black text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex flex-col justify-center sm:h-68 md:w-68 m-10">
              {" "}
              <img className="h-68 w-68 rounded-full " src={myImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

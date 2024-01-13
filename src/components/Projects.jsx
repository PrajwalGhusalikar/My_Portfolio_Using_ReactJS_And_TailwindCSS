import React from "react";
import myPortfolioImg from "../assets/portfolioImg.png";
import mynotebook from "../assets/myNotebook.png";
const Projects = () => {
  return (
    <div name="projects">
      <div className=" bg-gradient-to-r from-slate-900 to-slate-800  text-center ">
        <h2 className="text-4xl  text-slate-100 font-serif p-2">My Projects</h2>{" "}
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-950 p-2">
        <div className="projectsection   flex sm:flex-row flex-col justify-evenly p-5">
          <h3 className="text-center sm:hidden text-white p-2 text-2xl underline">
            My Portfolio
          </h3>
          <div className=" w-[300px] m-auto sm:m-0 sm:w-[340px]  mt-3 mb-3 flex flex-col justify-center ">
            {" "}
            <img
              className="m-auto h-52 sm:h-56 sm:w-auto sm:m-auto rounded-xl"
              src={myPortfolioImg}
              alt="Project1Img"
            />
          </div>
          <div className="buttons flex sm:hidden justify-center">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
              Live Link
            </button>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
              GitHub
            </button>
          </div>
          <div className="projectdetails sm:w-96 m-4 ">
            <h3 className="hidden sm:flex justify-center text-center text-white p-2 text-2xl underline">
              My Portfolio
            </h3>
            <h3 className="text-center text-white p-2 ">
              I have developed my Portfolio using React.js and TailwindCSS. This
              Portfolio website is fully functional and Responsive and can be
              operated at any device.
            </h3>
            <div className="buttons hidden sm:flex justify-center">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
                Live Link
              </button>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-950 p-2">
        <div className="projectsection   flex sm:flex-row flex-col justify-evenly p-5">
          <h3 className="text-center sm:hidden text-white p-2 text-2xl underline">
            Notes Management App Using MERN
          </h3>
          <div className="sm:hidden w-[300px] m-auto sm:m-0 sm:w-[340px]  mt-3 mb-3 flex flex-col justify-center ">
            {" "}
            <img
              className="m-auto h-52 sm:h-56 sm:w-auto sm:m-auto rounded-xl"
              src={mynotebook}
              alt="Project1Img"
            />
          </div>
          <div className="buttons flex sm:hidden justify-center">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
              Live Link
            </button>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
              GitHub
            </button>
          </div>
          <div className="projectdetails sm:w-96 m-4 ">
            <h3 className="hidden sm:flex justify-center text-center text-white p-2 text-2xl underline">
              Notes Management App Using MERN
            </h3>
            <h3 className="text-center text-white p-2 ">
              Responsive Note Management App with MERN Stack. CRUD operation
              APIs with Node.js, enabling users to seamlessly create, read,
              update, and delete notes. Implemented advanced JWT token
              management ensuring a secure and authentication. Added Login and
              Sign-up functionalities.
            </h3>
            <div className="buttons hidden sm:flex justify-center">
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
                Live Link
              </button>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32 mx-4 my-2 rounded-3xl text-white">
                GitHub
              </button>
            </div>
          </div>
          <div className="hidden w-[334px] m-auto sm:m-0 sm:w-[340px]  mt-3 mb-3 sm:flex flex-col justify-center ">
            {" "}
            <img
              className="m-auto h-56  sm:w-auto sm:m-auto rounded-xl"
              src={mynotebook}
              alt="Project1Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

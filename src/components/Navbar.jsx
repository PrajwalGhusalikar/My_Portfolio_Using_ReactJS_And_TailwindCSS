import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [toggle, settoggle] = useState("");
  let ref = useRef();

  return (
    <div className="w-screen ">
      <div className="flex  justify-between items-center w-screen h-16 sm:h-20 text-white fixed bg-slate-900 z-20">
        <div className="text-white font-serif text-start px-4 text-4xl  sm:w-96 w-auto ml-2 ">
         Prajwal <p></p>
        </div>
        <div className="hidden md:flex  text-xl justify-between p-1 pr-5 mr-2">
          <Link
            to="home"
            className="m-auto p-2 font-light rounded-2xl text-center hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer hover:transition duration-300 hover:ease-in-out hover:scale-105 hover:-translate-y-0.5"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Home
          </Link>

          <Link
            to="skills"
            className="m-auto p-2 font-light rounded-2xl text-center  hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer hover:transition duration-300 hover:ease-in-out hover:scale-105 hover:-translate-y-0.5"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Skills
          </Link>

          <Link
            to="projects"
            className="m-auto p-2 font-light rounded-2xl text-center hover:font-bold w-24 hover:bg-slate-800 text-gray-300  cursor-pointer   hover:transition duration-300 hover:ease-in-out hover:scale-105 hover:-translate-y-0.5"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Projects
          </Link>

          <Link
            to="experience"
            className="m-auto p-2 font-light rounded-2xl text-center hover:font-bold w-28 hover:bg-slate-800 text-gray-300  cursor-pointer   hover:transition duration-300 hover:ease-in-out hover:scale-105 hover:-translate-y-0.5"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Experience
          </Link>

          <Link
            to="certifications"
            className="m-auto p-2 font-light rounded-2xl text-center hover:font-bold w-28 hover:bg-slate-800 text-gray-300  cursor-pointer   hover:transition duration-300 hover:ease-in-out hover:scale-105 hover:-translate-y-0.5"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Certifications
          </Link>

          


          <Link
            to="contact"
            className="m-auto p-2 font-light rounded-2xl text-center hover:font-bold w-24 hover:bg-slate-800 text-gray-300  cursor-pointer hover:transition duration-300 hover:ease-in-out hover:scale-105 hover:-translate-y-0.5 "
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Contact
          </Link>

          <Link
            to="about"
            className="m-auto p-2 font-light rounded-2xl text-center hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer hover:transition duration-300 hover:ease-in-out hover:scale-105 hover:-translate-y-0.5"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            About
          </Link>
        </div>
        {toggle ? (
          ""
        ) : (
          <div
            onClick={() => {
              settoggle(true);
            }}
            className="  px-2 text-2xl  md:hidden hover:scale-120 cursor-pointer"
          >
            <i ref={ref} className="fa-solid fa-bars text-gray-300 pr-2"></i>
          </div>
        )}
        {toggle ? (
          <div
            onClick={() => {
              settoggle(false);
            }}
            className="  px-2 text-2xl  md:hidden hover:scale-120 cursor-pointer"
          >
            <i ref={ref} className="fa-solid fa-bars text-gray-300 pr-2"></i>
          </div>
        ) : (
          ""
        )}
      </div>

      {toggle ? (
        <div className="flex fixed top-0 left-0 right-0 z-5 flex-col justify-center text-center bg-slate-900 opacity-85 h-screen z-10 ">
          <Link
            className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 "
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Home
          </Link>

          <Link
            to="skills"
            className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 "
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Skills
          </Link>

          <Link
            to="projects"
            className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 "
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Projects
          </Link>

          <Link
            to="experience"
            className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 "
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Experience
          </Link>

          <Link
            to="certifications"
            className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 "
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Certifications
          </Link>


          <Link
            to="contact"
            className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 "
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            Contact
          </Link>

          <Link
            to="about"
            className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 "
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              settoggle(false);
            }}
          >
            About
          </Link>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Navbar;

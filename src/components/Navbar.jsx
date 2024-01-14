import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [toggle, settoggle] = useState("");

  let ref = useRef();

  return (
    <div className="w-screen ">
      <div className="flex  justify-between items-center w-screen h-20 text-white fixed bg-slate-900 z-20">
        <div className="text-white font-serif text-center px-4 text-4xl sm:w-96 w-auto ">
          It's me Prajwal <p></p>
        </div>
        <div className="hidden md:flex w-full justify-evenly p-1 pr-5">
          <div className=" p-2 font-light rounded-2xl text-center hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer">
            <Link
              to="home"
              className="m-auto"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Home
            </Link>
          </div>
          <div className="  p-2 font-light rounded-2xl text-center hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer">
            <Link
              to="skills"
              className="m-auto"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Skills
            </Link>
          </div>
          <div className="  p-2 font-light rounded-2xl text-center hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer">
            <Link
              to="projects"
              className="m-auto"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Projects
            </Link>
          </div>
          {/* <div className="  p-2 font-light rounded-2xl text-center hover:font-bold w-24 hover:bg-slate-800 text-gray-300  cursor-pointer">
            <Link
              to="experiance"
              className="m-auto"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Experiance
            </Link>
          </div> */} 
          <div className="  p-2 font-light rounded-2xl text-center hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer">
            <Link
              to="contact"
              className="m-auto"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Contact
            </Link>
          </div>
          <div className="  p-2 font-light rounded-2xl text-center hover:font-bold w-20 hover:bg-slate-800 text-gray-300  cursor-pointer">
            <Link
              to="about"
              className="m-auto"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              About
            </Link>
          </div>
         
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
            <i ref={ref} className="fa-solid fa-bars text-gray-300"></i>
          </div>
        )}
        {toggle ? (
          <div
            onClick={() => {
              settoggle(false);
            }}
            className="  px-2 text-2xl  md:hidden hover:scale-120 cursor-pointer"
          >
            <i ref={ref} className="fa-solid fa-bars text-gray-300"></i>
          </div>
        ) : (
          ""
        )}
      </div>

      {toggle ? (
        <div className="flex fixed top-0 left-0 right-0 z-5 flex-col justify-center text-center bg-slate-900 opacity-85 h-screen z-10 ">
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 ">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Home
            </Link>
          </div>
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800 ">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Skills
            </Link>
          </div>
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800  ">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Projects
            </Link>
          </div>
          {/* <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800  ">
            <Link
              to="experiance"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Experiance
            </Link>
          </div> */}
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800  ">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              Contact
            </Link>
          </div>
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer rounded-2xl text-center hover:font-bold  hover:bg-slate-800  ">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => {
                settoggle(false);
              }}
            >
              About
            </Link>
          </div>
          
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Navbar;

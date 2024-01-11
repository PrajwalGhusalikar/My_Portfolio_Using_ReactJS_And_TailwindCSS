import React, { useState } from "react";
const Navbar = () => {
  const [toggle, settoggle] = useState("");
  return (
    <div>
      <div className="flex z-10 justify-between items-center w-full h-20 text-white fixed bg-slate-900 ">
        <div className="text-white font-serif text-center px-4 text-4xl ">
          It's me Prajwal
        </div>
        <div className="hidden md:flex justify-end">
          <div className=" px-2 font-light text-gray-300 hover:font-bold cursor-pointer">
            Home
          </div>
          <div className=" px-2 font-light text-gray-300 hover:font-bold cursor-pointer">
            Projects
          </div>
          <div className=" px-2 font-light text-gray-300 hover:font-bold cursor-pointer">
            About
          </div>
          <div className=" px-2 font-light text-gray-300 hover:font-bold cursor-pointer">
            Contact
          </div>
        </div>
        {toggle?"": <div onClick={()=>{settoggle(true)}} className="  px-2 text-2xl  md:hidden hover:scale-120 cursor-pointer">
          <i className="fa-solid fa-bars text-gray-300"></i>
        </div>}
        {toggle?<div onClick={()=>{settoggle(false)}} className="  px-2 text-2xl  md:hidden hover:scale-120 cursor-pointer">
          <i className="fa-solid fa-bars text-gray-300"></i>
        </div>: ""}
       
      </div>

      {toggle ? (
        <div className="flex fixed top-0 left-0 right-0 z-5 flex-col justify-center text-center bg-slate-900 h-screen ">
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer ">
            Home
          </div>
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer ">
            Projects
          </div>
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer ">
            About
          </div>
          <div className="text-white text-3xl py-4 hover:scale-115 cursor-pointer ">
            Contact
          </div>
        </div>
      ) : (
        " "
      )}

    </div>
  );
};

export default Navbar;

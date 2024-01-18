import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-screen  bg-slate-900  text-xl flex flex-col sm:flex-row justify-around items-center text-gray-400  ">
        <div className=" flex justify-center items-center text-start hover:text-gray-300 hover:cursor-pointer p-1">
          <a href="mailto:prajwalghusalikar@gmail.com">
            <i className=" hidden sm:block fa-solid fa-envelope  hover:text-gray-300 hover:cursor-pointer text-2xl p-2 pb-0"></i>
            <span className=" text-xl select-all underline ">
              prajwalghusalikar@gmail.com
            </span>
          </a>
        </div>

        <div className=" text-xl  flex flex-evenly  items-center">
          <div className="p-2 text-center hidden sm:block hover:text-gray-300 hover:cursor-pointer ">
            {" "}
            <a
              href="https://www.linkedin.com/in/prajwal-ghusalikar-139ab0282/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin hover:text-gray-300 hover:cursor-pointer text-xl p-2"></i>{" "}
              Linkedin
            </a>
          </div>
          <div className="p-2 text-center hidden sm:block hover:text-gray-300 hover:cursor-pointer">
            {" "}
            <a
              href=" https://www.instagram.com/prajval___100/?igsh=NzcyZHR0enR6OTNs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram hover:text-gray-300 hover:cursor-pointer text-xl p-2"></i>
              Instagram
            </a>
          </div>
          <div className="p-2 text-center hidden sm:block hover:text-gray-300 hover:cursor-pointer">
            {" "}
            <a
              href="https://github.com/PrajwalGhusalikar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github hover:text-gray-300 hover:cursor-pointer text-xl p-2"></i>{" "}
              GitHub
            </a>
          </div>
          <a href="\Prajwal_Ghusalikar_Resume1.pdf" download>
            <div className="p-2 text-center hidden sm:block hover:text-gray-300 hover:cursor-pointer">
              <i className="fa-regular fa-file hover:text-gray-300 hover:cursor-pointer text-xl p-2"></i>{" "}
              Resume
            </div>
          </a>
          <div className="social-media-links  flex justify-start p-2  sm:hidden ">
            <div className="linkdin mr-2 ">
              <a
                href="https://www.linkedin.com/in/prajwal-ghusalikar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin hover:text-gray-300 hover:cursor-pointer text-xl"></i>
              </a>
            </div>
            <div className="insta mx-2">
              <a
                href=" https://www.instagram.com/prajval___100/?igsh=NzcyZHR0enR6OTNs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram hover:text-gray-300 hover:cursor-pointer text-xl"></i>
              </a>
            </div>
            <div className="github mx-2 ">
              <a
                href="https://github.com/PrajwalGhusalikar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github hover:text-gray-300 hover:cursor-pointer text-xl"></i>
              </a>
            </div>
            {/* <div className="twitter mx-2 ">
              <i className="fa-solid fa-file hover:text-gray-300 hover:cursor-pointer text-3xl"></i>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-screen h-16 bg-slate-900  text-xl flex justify-center items-center text-gray-500 ">
        <h3 className=" text-center text-xs p-2">
          Copyright © 2022 Prajwal Ghusalikar Portfolio. All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;

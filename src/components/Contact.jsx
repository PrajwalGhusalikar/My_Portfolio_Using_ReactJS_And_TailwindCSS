import React from "react";
import avatar from "../assets/contact-avatar3.png";

const Contact = () => {
  return (
    <div name="contact">
      <div className=" bg-gradient-to-r from-slate-900 to-slate-800 border-none  text-center sticky z-5 top-16 sm:top-20 ">
        <h2 className="text-3xl  text-slate-100 font-serif p-2">Contact Me</h2>{" "}
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-950  w-screen flex flex-col sm:flex-row justify-evenly items-center p-3 ">
        <div className="sm:h-[460px] sm:w-[480px] p-2  ">
          <div className=" flex justify-center text-gray-500  items-center text-start hover:text-gray-300 hover:cursor-pointer p-1">
            <a href="mailto:prajwalghusalikar@gmail.com">
              <i className=" hidden sm:block fa-solid fa-envelope  hover:text-gray-300 hover:cursor-pointer text-2xl p-2 pb-0"></i>
              <span className=" text-xl select-all underline ">
                prajwalghusalikar@gmail.com
              </span>
            </a>
          </div>
          <img
            src={avatar}
            alt=""
            className="rounded-2xl sm:h-[450px] sm:w-[450px]   "
          />
        </div>
        <form
          action="https://getform.io/f/0502ac82-7ddc-4015-93fd-e20b2a4a00b6"
          method="POST"
          className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-2xl w-80 sm:w-96 shadow-slate-900 flex flex-col justify-center m-5 rounded-xl"
        >
          <h1 className="text-white font-extrabold text-2xl text-center p-2 underline">
            Contact Me
          </h1>
          <h2 className="text-gray-300 font-semibold font-serif p-4 text-xl  pb-2">
            Your Name
          </h2>
          <input
            className=" bg-sky-950  m-4 mt-2 mb-2 rounded-xl h-10 text-white p-2 border-gray-500 border-spacing-1 border-2"
            type="text"
            placeholder="eg, Firstname Lastname"
            name="name"
            required
          />
          <h2 className="text-gray-300 font-semibold font-serif py-2 pl-4 text-xl  ">
            Your Email
          </h2>
          <input
            className=" bg-sky-950 m-4 mt-2 mb-2 rounded-xl h-10 text-white p-2 border-gray-500 border-spacing-1 border-2"
            placeholder="eg, example@gmail.com"
            name="email"
            type="email"
            required
          />
          <h2 className="text-gray-300 text-xl font-semibold font-serif py-2 pl-4">
            Description
          </h2>
          <textarea
            className=" bg-sky-950 m-4 mt-2 mb-2 rounded-xl h-28 text-white p-2 border-gray-500 border-spacing-1 border-2"
            placeholder="eg, Your company, description or query"
            cols="30"
            rows="10"
            name="field"
            required
          ></textarea>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-10 w-32  m-4 mt-2 rounded-3xl text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

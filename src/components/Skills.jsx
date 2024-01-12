import React from "react";
import jsLogo from "../assets/jsLogo.png";
import mongodbLogo from "../assets/MongoDB-Logo.png";
import cssLogo from "../assets/css.png";
import bootstrapLogo from "../assets/bootstrap.png";
import nodejsLogo from "../assets/nodeJs.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import expressLogo from "../assets/express.png";
import htmlLogo from "../assets/html.png";
const Skills = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-slate-900 to-slate-950 flex flex-col text-center  ">
        <h2 className="text-4xl text-slate-100 font-serif p-2">My Technical Skills</h2>
        <div className=" bg-gradient-to-r from-slate-800 to-slate-950 sm:flex flex-wrap justify-evenly  p-5 w-screen">
          <div className=" flex flex-col p-3 ">
            <h1 className="text-slate-400 text-center py-2 text-3xl">
              <u>Frontend</u>
            </h1>
            <div className=" m-auto  md:w-80 flex flex-wrap justify-evenly">
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={reactLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">ReactJS</h1>
              </div>
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={jsLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">
                  Javascript
                </h1>
              </div>
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={tailwindLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">
                  TailwindCSS
                </h1>
              </div>
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={bootstrapLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">
                  Bootstrap
                </h1>
              </div>
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={cssLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">Css</h1>
              </div>
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={htmlLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">Html</h1>
              </div>
            </div>
          </div>{" "}
          <div className=" flex flex-col p-3 ">
            <h1 className="text-slate-400 text-center py-2 text-3xl">
              <u>Backend</u>
            </h1>
            <div className=" m-auto  md:w-80 flex flex-wrap justify-evenly">
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={nodejsLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">NodeJS</h1>
              </div>
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-24 w-auto m-auto p-2 "
                    src={expressLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">
                  ExpressJS
                </h1>
              </div>
            </div>
          </div>{" "}
          <div className=" flex flex-col p-3 ">
            <h1 className="text-slate-400 text-center py-2 text-3xl">
              <u>Database</u>
            </h1>
            <div className=" m-auto  md:w-80 flex flex-wrap justify-evenly">
              <div className="badge w-auto flex flex-col justify-center m-3">
                <div className="img ">
                  <img
                    className="h-36 w-auto m-auto p-2  "
                    src={mongodbLogo}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-cyan-100 text-base">MongoDB</h1>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Skills;

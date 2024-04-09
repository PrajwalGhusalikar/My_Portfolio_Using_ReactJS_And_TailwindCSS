import React from "react";
import { Card } from "@mui/material";
import OneSmarterLogo from "../assets/logo-two.png";
import MahiLakraLogo from "../assets/mahiLakraLogo.png";

const Experience = () => {
  const steps = [
    {
      title: "Intern",
      role: "Fullstack Developer",
      company: "Mahi Lakra Foundation",
      logo: MahiLakraLogo,
      duration: "Nov 2023 - March 2024",
      description: "Worked on Mahi Lakra Official Website",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "TailwindCss",
        "NodeJs",
        "ExpressJs",
      ],
      current: "no",
    },
    {
      title: "Intern",
      role: "Frontend React Developer",
      company: "OneSmarter Inc.",
      logo: OneSmarterLogo,
      duration: "Feb 2023 - Present",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "TailwindCss",
        "NodeJs",
        "ExpressJs",
      ],
      description: "Working on Supply Chain Simulation Project",
      current: "yes",
    },
  ];

  return (
    <div name="experience" className="bg-gray-900 pb-10">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-center sticky  top-16 sm:top-20">
        <h2 className="text-3xl text-gray-100 font-serif py-2">
          My Experience
        </h2>
      </div>
      <div className=" mx-auto pl-7 sm:p-4 flex justify-center items-center pt-10 ">
        <div
          style={{
            width: "2px",
            height: "200px",
            translate: "-15px",
            backgroundColor: "#6b7580",
            margin: 0,
          }}
          className="step-connector text-white flex flex-col justify-between"
        >
          <p className=" text-xl bg-green-800 rounded-full w-7 text-center -translate-x-3">
            1
          </p>
          <p className=" text-xl bg-green-900 rounded-full w-7 text-center -translate-x-3">
            2
          </p>
        </div>
        <div className="m-2 w-64 sm:w-96 ">
          {steps.map((step, index) => (
            <div key={index}>
              {index > 0}
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "#333",
                  transition: "transform 0.3s ease-in-out",
                  marginBottom: "20px",
                }}
              >
                <div className="flex flex-col items-start p-3">
                  <div className="ml-4 flex flex-col flex-grow">
                    <div className="flex items-center mb-2">
                      <img
                        src={step.logo}
                        alt={step.company}
                        className="h-8 w-8 mr-2"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-400">{step.company}</p>
                      </div>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-green-500">
                        {step.role}
                      </h4>
                      <p className="text-sm text-gray-400">{step.duration}</p>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm text-gray-800 text-wrap flex overflow-hidden flex-wrap w-60 sm:w-80">
                        {step.skills.map((skill, index) => {
                          return (
                            <span
                              key={index}
                              className="text-white bg-slate-500 mx-2 p-1 px-2 rounded my-1 text-wrap "
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                    <div className="">
                      {" "}
                      <h2 className="text-lg font-base text-green-500  ">Description:</h2>
                      <p className="text-white ml-10">{step.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

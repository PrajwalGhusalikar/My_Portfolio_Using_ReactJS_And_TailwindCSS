import React, { useState } from "react";
import { Stepper, Step, StepLabel, Card, CardContent, Typography, Chip } from "@mui/material";
import CheckCircleOutlineOutlined from "@mui/icons-material/CheckCircleOutlineOutlined";
import LaptopChromebook from "@mui/icons-material/LaptopChromebook";
import OneSmarterLogo from "../assets/logo-one.png";
import MahiLakraLogo from "../assets/mahiLakraLogo.png";

const steps = [
  {
    title: "Intern at ",
    role: "React Developer",
    company: "Mahi Lakra Foundation",
    logo: MahiLakraLogo,
    duration: "Nov 2023 - March 2024",
    description: `Worked on Mahi Lakra Official Website`,
    current: "no",
  },
  {
    title: "Intern at ",
    role: "React Developer",
    company: "OneSmarter Inc.",
    logo: OneSmarterLogo,
    duration: "Feb 2023 - Present",
    description: `Working on Supply Chain Simulation Project`,
    current: "yes",
  },
];

const Experience = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div name="experience" className="bg-gray-900 py-8">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-center sticky z-50 top-16 sm:top-20">
        <h2 className="text-3xl text-gray-100 font-serif py-2">
          My Experience
        </h2>
      </div>
      <div className="container mx-auto p-4 flex justify-center">
        <Stepper activeStep={activeStep} orientation="vertical" sx={{ width: "100%" }}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                icon={
                  activeStep === index ? (
                    <CheckCircleOutlineOutlined className="text-green-500" />
                  ) : (
                    <LaptopChromebook color="white" />
                  )
                }
              >
                <Card
                  className="m-2 sm:w-96"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#333",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <Typography variant="h6" color="pink">
                        {step.current === "yes" && (
                          <Chip
                            color="info"
                            label="Currently Working"
                            size="small"
                          />
                        )}
                      </Typography>
                      <Typography
                        variant="h5"
                        className="text-xl font-semibold text-gray-300 flex items-center mt-2"
                      >
                        <img
                          className="h-10 mr-2"
                          src={step.logo}
                          alt=""
                          style={{ verticalAlign: "middle" }}
                        />
                        {step.title}
                        <span className="text-gray-400 text-sm">
                          {step.company}
                        </span>
                      </Typography>
                      <Typography
                        variant="h5"
                        className="text-lg font-semibold text-gray-400 mt-1"
                      >
                        {step.role}
                      </Typography>
                      <Typography variant="body1" className="text-gray-400 mt-1">
                        {step.duration}
                      </Typography>
                      <Typography variant="body1" className="text-gray-300 mt-1">
                        {step.description}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default Experience;
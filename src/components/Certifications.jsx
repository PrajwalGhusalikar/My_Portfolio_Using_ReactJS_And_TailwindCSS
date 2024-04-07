import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Certificate from "../assets/Coursera-webDev-Frontend.png";

import CertificatePDF from "../assets/Coursera Frontend Prajwal.pdf";
export default function Certifications() {
  const steps = [
    {
      title: "Coursera WebDev Certificate ",
      Image: Certificate,
      description: "Getting Started with Front-End Web Developement",
      PDFLInk : CertificatePDF
    },
    {
      title: "Coursera React Frontend Certificate ",
      Image: Certificate,
      description: "Projects with React.js",
      PDFLInk: ""
    },
  ];
  return (
    <div name="certifications" className="bg-gray-900 pb-10">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-center sticky  top-16 sm:top-20">
        <h2 className="text-3xl text-gray-100 font-serif py-2">
          My Certifications and Courses
        </h2>
      </div>
      <div className="  ">
        <div className="m-2 flex flex-col sm:flex-row justify-center items-center ">
          {steps.map((step, index) => (
            <div className=" flex justify-evenly items-center" key={index}>
              {index > 0}
              <Card
                sx={{ width: 300 }}
                md={{ width: 550 }}
                className="m-3 border border-spacing-6 border-white"
              >
                <CardMedia
                  className="border border-gray-950"
                  sx={{ height: 230 }}
                  md={{ height: 540 }}
                  image={step.Image}
                  title={step.title}
                />
                <CardContent className="">
                  <h5 className="text-xl text-green-700">{step.title}</h5>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                  <div className="flex justify-end">
                    {" "}
                    <a
                      className="bg-green-500 p-2 rounded-lg py-1 text-sm text-white"
                      href={`${step.PDFLInk}`}
                      download="Coursera_Prajwal_Certificate"
                    >
                      Download <i class="fa-solid fa-download"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

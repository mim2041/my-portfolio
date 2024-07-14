import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const Details = ({ project }) => {

  return (
    <div className="p-5 lg:p-0 w-full">
      <div className="text-justify  ">
        <h1 className="text-xl lg:text-5xl font-bold md:text-center text-orange-600 ">
          {project?.title}
        </h1>
        <div className="md:w-2/3  mx-auto">
          <h3 className="text-orange-600 lg:pt-10 underline">
            About This Project
          </h3>
          <p>{project?.about}</p>
          <br />
          <p className="text-warning flex items-center ">
            <BsFillCalendarDateFill className="md:text-2xl mx-2" /> {project?.date}
          </p>
          <h3 className="text-orange-600 pt-10 underline">
            Features of This Project
          </h3>

          <ol className="list-decimal">
            {project?.features?.map((feature, index) => (
              <li key={index} className="ml-6">
                {index + 1}. {feature}
              </li>
            ))}
          </ol>
          <h3 className="text-orange-600 pt-10 underline">Technologies Used</h3>
          <p>
            {project?.technologies?.map((tech, index) => (
              <span key={index} className="">
                {tech}
                {index < project.technologies.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </span>
            ))}
          </p>

          <div className="flex items-center gap-1 md:justify-between">
            {project?.live && (
              <a href={project?.live} className="btn">
                Live Demo
              </a>
            )}

            {project?.client && (
              <a href={project?.client} className="btn">
                Github Client
              </a>
            )}
            {project?.server && (
              <a href={project?.server} className="btn">
                Github Server
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

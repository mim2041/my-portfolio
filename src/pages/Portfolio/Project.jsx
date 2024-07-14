import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import Details from "./Details";
import { useParams } from "react-router-dom";
import ProjectData from "../../components/Data/ProjectData";
import CustomSwiper from "../../components/shared/Swiper/CustomSwiper";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Projects = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectInfo = ProjectData.find(
      (project) => project.title.toLowerCase().split(" ").join("-") === name
    );
    setProject(projectInfo);
  }, [name]);

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1280) setSlidesPerView(4);
      else if (screenWidth >= 768) setSlidesPerView(3);
      else setSlidesPerView(2);
    };
    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="lg:py-20 mx-8 md:mx-0">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between w-full gap-6 md:gap-12 lg:gap-20">
      <div className="md:w-2/3 text-justify">
        {/* <Details project={project} /> */}
        <h1 className="text-xl lg:text-5xl font-bold md:text-center text-orange-600 ">
          {project?.title}
        </h1>
        <div className="  mx-auto">
          <h3 className="text-orange-600 lg:pt-10 underline">
            About This Project
          </h3>
          <p>{project?.about}</p>
          <br />
          <p className="text-warning flex items-center ">
            <BsFillCalendarDateFill className="md:text-2xl mx-2" /> {project?.date}
          </p>
          </div>
      </div>
      <div className=" md:w-1/3 ">
        <CustomSwiper
          navigation={false}
          onSlideChange={() => console.log("slide change")}
          spaceBetween={15}
          slidesPerView={1}
          onClick={false}
          centerSlides={false}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          paginationProps={{ clickable: true, color: "#7214FF" }}
        >
          {project?.image?.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 border rounded-xl bg-white h-[300px] w-[340px] mx-auto md:w-full">
                <img src={photo} alt={photo?.title} className="my-auto"/>
              </div>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
      
    </div>
    <div className="w-full text-justify flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 lg:gap-20">
        <div className="md:w-3/5">
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
        </div>
        <div className="md:w-1/3">
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

          <div className="flex items-center gap-1 md:justify-between mt-5">
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

export default Projects;

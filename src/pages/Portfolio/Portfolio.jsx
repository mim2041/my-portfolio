import { Link } from 'react-router-dom';
import ProjectData from '../../components/Data/ProjectData';
import './Portfolio.css';

const Portfolio = () => {

    const titleConvert = (title) => {
        return title.toLowerCase().split(" ").join("-");
    };

    return (
        <section id="projects" className='w-full'>
      {/* <h5>My Recent Work</h5> */}
      <h2 className="text-3xl ">Projects</h2>
      <hr />
      <div className="container portfolio_container rounded-lg">
        {ProjectData?.map((project, index) => (
          <article key={index} className="portfolio_item rounded-lg">
            <div className="portfolio_item-image w-100 h-44 md:h-54  w-full object-fill">
              <img
                src={
                  project?.image?.length
                    ? project?.image[0]
                    : "https://via.placeholder.com/150"
                }
                alt=""
                className='w-full h-full rounded-t-lg'
              />
            </div>

            <div>
              <h3 className="text-left ml-5 mt-2">{project?.title}</h3>
              <p className='text-[12px] text-gray-300 text-left mx-5'>{project?.about.slice(0,60)}...</p>
              <div className="portfolio_item-cta mb-5">
              
              {project?.live && (
                <a
                  href={project?.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
              )}
              <Link
                to={`/projects/${titleConvert(project?.title)}`}
                className="btn-primary"
              >
                View Details
              </Link>
            </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    );
};

export default Portfolio;
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
      <div className="container portfolio_container">
        {ProjectData?.map((project, index) => (
          <article key={index} className="portfolio_item">
            <div className="portfolio_item-image w-100 h-44 md:h-60  w-full object-fill">
              <img
                src={
                  project?.image?.length
                    ? project?.image[0]
                    : "https://via.placeholder.com/150"
                }
                alt=""
              />
            </div>

            <div className="portfolio_item-cta">
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
                className="btn"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
    );
};

export default Portfolio;
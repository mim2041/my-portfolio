import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <div>
                <Portfolio />
                <div className="flex items-center justify-end px-52 ">
                    <Link to="/projects">
                    <button className="text-right btn ">
                        Show All
                    </button>
                    </Link>
                </div>
            </div>
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
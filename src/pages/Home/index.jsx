import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Portfolio />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
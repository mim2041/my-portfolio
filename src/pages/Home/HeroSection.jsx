import profile from '../../assets/images/profile/profile-removebg.png';
import Type from '../../components/UI/Type/Type';
import cv from "../../assets/CV.pdf";
import resume from "../../assets/Resume.pdf";
import './index.css';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';


const HeroSection = () => {
    return (
      <header className='flex flex-col md:flex-row items-center md:justify-between gap-8 mg:gap-16 max-w-[1200px] mx-auto lg:-mt-10 mb-8 lg:h-screen my-auto'>
        <div className="header-social hidden lg:flex md:w-1/4">
            <a href="https://www.facebook.com/mim.suraiya/" target="_blank" rel="noreferrer" ><BsFacebook></BsFacebook></a>
            <a href="https://github.com/mim2041" target="_blank" rel="noreferrer"><BsGithub></BsGithub></a>
            <a href="https://www.linkedin.com/in/mim-khatun-225077278/" target="_blank" rel="noreferrer"><BsLinkedin></BsLinkedin></a>
        </div>
        <div className="pic-con flex flex-col gap-">
           <div className="me">
             <img src={profile} alt="" />
           </div>
           <div className='bg-[#4db5ff] w-full flex items-center '>
            <marquee behavior="" direction="" className="text-black">I'm Available now. Hire me!!!</marquee>
           </div>
         </div>

         <div className=" lg:pt-0 ">
           <h5>Hello I'm</h5>
           <h1 className="title-name text-2xl">Mim Khatun</h1>
           <p className="text-warning">
             <Type />
           </p>
           <div className='flex gap-5 mt-6'>
              <a href={cv} download className='btn flex items-center justify-center'>Download CV</a>
              <a href={resume} download className='btn btn-primary flex items-center justify-center'>Download Resume</a>
            </div>
         </div>
        <div className='hidden md:block relative w-full md:w-1/4'>
            <a href="#Contact" className="scroll-down w-full">
            Scroll Down
          </a>
        </div>
      </header>
        
    );
};

export default HeroSection;
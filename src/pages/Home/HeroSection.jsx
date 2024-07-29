import profile from '../../assets/images/profile/profile-removebg.png';
import Type from '../../components/UI/Type/Type';
import cv from "../../assets/CV.pdf";
import resume from "../../assets/Resume.pdf";
import './index.css';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';


const intro = {
  hidden : { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 1,
    }
  }
};

const introChildren = {
    hidden: { opacity : 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring', bounce: 0.5 } }
}

const photo = {
    initial : { y: 0, scale: 5 },
    animate: {
        y: 50,
        scale: 1,
        transition: {
            duration: 1,
            y: {
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
                ease: 'easeInOut'
            }
        }
    }
}


const HeroSection = () => {
    return (
      <header className='flex flex-col md:flex-row items-center md:justify-between gap-8 mg:gap-16 max-w-[1200px] mx-auto lg:-mt-10 mb-8 lg:h-screen my-auto'>
        <div className="header-social hidden lg:flex md:w-1/4">
            <a href="https://www.facebook.com/mim.suraiya/" target="_blank" rel="noreferrer" ><BsFacebook></BsFacebook></a>
            <a href="https://github.com/mim2041" target="_blank" rel="noreferrer"><BsGithub></BsGithub></a>
            <a href="https://www.linkedin.com/in/mim-khatun-225077278/" target="_blank" rel="noreferrer"><BsLinkedin></BsLinkedin></a>
        </div>
        <motion.div variants={photo} initial="initial" animate="animate" className="pic-con flex flex-col gap-">
           <div className="me">
             <img src={profile} alt="" />
           </div>
           <div className='bg-[#4db5ff] w-full flex items-center '>
            <marquee className="text-black">I'm Available now. Hire me!!!</marquee>
           </div>
         </motion.div>

         <motion.div variants={intro} initial="hidden" animate="visible" className=" lg:pt-0 ">
           <motion.h5 variants={introChildren}>Hello I'm</motion.h5>
           <motion.h1 variants={introChildren} className="title-name text-2xl">Mim Khatun</motion.h1>
           <motion.p variants={introChildren} className="text-warning">
             <Type />
           </motion.p>
           <motion.div variants={introChildren} className='flex gap-5 mt-6'>
              <a href={cv} download className='btn flex items-center justify-center'>Download CV</a>
              <a href={resume} download className='btn btn-primary flex items-center justify-center'>Download Resume</a>
            </motion.div>
         </motion.div>
        <div className='hidden md:block relative w-full md:w-1/4'>
            <a href="#Contact" className="scroll-down w-full">
            Scroll Down
          </a>
        </div>
      </header>
        
    );
};

export default HeroSection;
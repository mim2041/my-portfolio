import React from 'react';
import profile from '../../assets/images/profile/profile-removebg.png';
import Type from '../../components/UI/Type/Type';
import cv from "../../assets/CV.pdf";
import resume from "../../assets/Resume.pdf";
import './index.css';
import { BsFacebook,BsGithub,BsInstagram, BsLinkedin } from 'react-icons/bs';


const HeroSection = () => {
    return (
        <header id="home ">
      <div className="container header-container  lg:flex justify-center gap-40 items-center">
        <div className="pt-5 lg:pt-0">
          <h5>Hello I'm</h5>
          <h1 className="title-name text-lg">Abdur Rouf Likhon</h1>
          <p className="text-warning">
            <Type />
          </p>
          <div className='flex gap-5 mt-6'>
                    <a href={cv} download className='btn flex items-center justify-center'>Download CV</a>
                    <a href={resume} download className='btn btn-primary flex items-center justify-center'>Download Resume</a>
                </div>
        </div>
        <div className="pic-con">
          <div className="me">
            <img src={profile} alt="" />
          </div>
        </div>
        <a href="#Contact" className="scroll-down">
          Scroll Down
        </a>
        <div className="header-social">
            <a href="https://www.facebook.com/mim.suraiya/" target="_blank" rel="noreferrer" ><BsFacebook></BsFacebook></a>
            <a href="https://github.com/mim2041" target="_blank" rel="noreferrer"><BsGithub></BsGithub></a>
            <a href="https://www.linkedin.com/in/mim-khatun-225077278/" target="_blank" rel="noreferrer"><BsLinkedin></BsLinkedin></a>
        </div>
      </div>
    </header>
        
    );
};

export default HeroSection;
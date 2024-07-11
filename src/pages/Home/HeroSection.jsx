import React from 'react';
import profile from '../../assets/images/profile/profile-removebg.png';
import Type from '../../components/UI/Type/Type';
import cv from "../../assets/CV.pdf";
import resume from "../../assets/Resume.pdf";
import './index.css';
import { BsFacebook,BsGithub,BsInstagram, BsLinkedin } from 'react-icons/bs';


const HeroSection = () => {
    return (
        <header className='max-w-7xl'>
            <div className='header-container flex flex-col md:flex-row items-center md:justify-center lg:justify-between gap-10 md:gap-2 lg:gap-5 relative md:mr-20 lg:mr-0'>
            <div>
                <img src={profile} alt=""  className='w-[500px]'/>
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <h5>Hello, I'm</h5>
                <h1 className='text-[#4db5ff] text-3xl '>Mim Khatun</h1>
                <p className='text-warning'>
                    <Type />
                </p>

                <div className='flex gap-5 mt-6'>
                    <a href={cv} download className='btn flex items-center justify-center'>Download CV</a>
                    <a href={resume} download className='btn btn-primary flex items-center justify-center'>Download Resume</a>
                </div>
            </div>
            <a href="#contact" className='scroll-down absolute md:-right-36 lg:-right-[390px]'>## Scroll-down ##</a>
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
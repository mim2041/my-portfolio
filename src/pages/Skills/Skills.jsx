import { motion } from 'framer-motion';

const Skills = () => {
  const containerDiv = {
    initial: { y: 0 },
    hover: {
      y: 16, // A slight upward movement for hover effect
      scale: 1.05, // Slight scale increase on hover
      transition: {
        repeat: Infinity,
        duration: 2, // Adjust for a quicker hover effect
        repeatType: "reverse",
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className='my-16'>
      <h2 className='text-3xl text-[#4db5ff]'>Skills And Experience</h2>
      <div className="container mx-auto p-4 grid grid-cols-2 gap-6">
      {/* Skills Section */}
      <motion.section
        variants={containerDiv}
        initial="initial"
        whileHover="hover" // Correctly trigger the hover variant
        id="skills"
        className="bg-gray-800 p-6 lg:px-10 rounded-lg mt-8 text-left"
      >
        <h2 className="text-3xl font-semibold text-white mb-5">Skills</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">
            Programming Languages
          </h3>
          <p className="text-gray-400">TypeScript, JavaScript, C, C++, Python</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">
            Frontend Technologies
          </h3>
          <p className="text-gray-400">
            NextJS, ReactJS, Redux, TypeScript, JavaScript (ES6), TailwindCSS,
            Bootstrap, HTML5, CSS3, Firebase
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">
            Backend Technologies
          </h3>
          <p className="text-gray-400">
            NodeJS, ExpressJS, Mongoose, JWT, TypeScript, MongoDB
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">Tools</h3>
          <p className="text-gray-400">
            Git (GitHub), Jira, Postman, Trello, VS Code, MS Office
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">
            Architectural Design / Pattern
          </h3>
          <p className="text-gray-400">MVC, Modular Pattern, Client-Server</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">Other</h3>
          <p className="text-gray-400">Storage Service: Imgbb</p>
          <p className="text-gray-400">
            Deployment/Hosting: Vercel, Firebase
          </p>
          <p className="text-gray-400">
            Component Library: DaisyUI, React-Bootstrap, MUI, Shadcn UI, Framer Motion
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={containerDiv}
        initial="initial"
        whileHover="hover" // Correctly trigger the hover variant
        id="skills"
        className="bg-gray-800 p-6 lg:px-10 rounded-lg mt-8 text-left"
      >
        <h2 className="text-3xl font-semibold text-white mb-5">Experience</h2>
        <p className='text-sm text-gray-400 leading-[23px] mb-3'>With over two years of hands-on experience in web development, I have proven abilities to collaborate effectively with team members at all levels. I am passionate about continual learning and enjoy mentoring junior developers while refining my skills alongside senior engineers. My goal is to apply my coding expertise within a large development team to create quality solutions and contribute meaningfully to impactful projects.</p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">
            Frontend Developer Intern
          </h3>
          <p>Scopioe</p>
          <p>August 2024 - Present</p>
        </div>
        <div className='my-3'>
          <ul className='list-disc list-inside pl-5 text-gray-400 text-sm leading-[25px]'>
            <li>Developed interactive and responsive web components using React.js and Next.js, focusing on creating dynamic user interfaces that optimize user engagement.</li>
            <li>Collaborated with UI/UX designers to transform design mockups into functional components, ensuring seamless performance across devices.</li>
            <li>Implemented modular and reusable frontend components to streamline development and maintainability.</li>
            <li>Integrated APIs and managed state effectively to ensure smooth data flow and responsiveness.</li>
          </ul>
        </div>

      </motion.section>
    </div>
    </div>
  );
};

export default Skills;

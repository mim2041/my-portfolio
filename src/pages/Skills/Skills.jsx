
const Skills = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 p-6 lg:px-10 rounded-lg mt-8 text-left">
        <h2 className="text-3xl font-semibold text-white mb-8">Skills</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200">
            Programming Languages
          </h3>
          <p className="text-gray-400">
            TypeScript, JavaScript, C, C++, Python
          </p>
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
          {/* <p className="text-gray-400">Payment Gateway: SSLCommerz, Stripe</p> */}
          <p className="text-gray-400">
            Component Library: DaisyUI, React-Bootstrap, MUI, Shadcn UI, Framer Motion
          </p>
        </div>
      </section>
    </div>
  );
};

export default Skills;

import sheba1 from '../../assets/projects/sheba1.png';
import sheba2 from '../../assets/projects/sheba2.png';
import sheba3 from '../../assets/projects/sheba3.png';
import sheba4 from '../../assets/projects/sheba4.png';
import sheba5 from '../../assets/projects/sheba5.png';

import masjid1 from '../../assets/projects/masjid1.png';
import masjid2 from '../../assets/projects/masjid2.png';
import masjid3 from '../../assets/projects/masjid3.png';

import shdcl1 from '../../assets/projects/shdcl1.png';
import shdcl2 from '../../assets/projects/shdcl2.png';
import shdcl3 from '../../assets/projects/shdcl3.png';
import shdcl4 from '../../assets/projects/shdcl4.png';

import cinta1 from '../../assets/projects/cinta1.png';
import cinta2 from '../../assets/projects/cinta2.png';
import cinta3 from '../../assets/projects/cinta3.png';

import bee1 from '../../assets/projects/bee1.png';
import bee2 from '../../assets/projects/bee2.png';
import bee3 from '../../assets/projects/bee3.png';
import bee4 from '../../assets/projects/bee4.png';
import bee5 from '../../assets/projects/bee5.png';

import AIHub1 from '../../assets/projects/AIHub1.png';
import AIHub2 from '../../assets/projects/AIHub2.png';

import snake1 from '../../assets/projects/snake1.png';
import snake2 from '../../assets/projects/snake2.png';
import snake3 from '../../assets/projects/snake3.png';

import tour1 from '../../assets/projects/tour1.png';

import carrier1 from '../../assets/projects/carrier1.png';
import carrier2 from '../../assets/projects/carrier2.png';
import carrier3 from '../../assets/projects/carrier3.png';
import carrier4 from '../../assets/projects/carrier4.png';
import carrier5 from '../../assets/projects/carrier5.png';

import cuisine1 from '../../assets/projects/cuisine1.png';
import cuisine2 from '../../assets/projects/cuisine2.png';
import cuisine3 from '../../assets/projects/cuisine3.png';

import fairy1 from '../../assets/projects/fairy1.png';
import fairy2 from '../../assets/projects/fairy2.png';
import fairy3 from '../../assets/projects/fairy3.png';

import dance1 from '../../assets/projects/dance1.png';
import dance2 from '../../assets/projects/dance2.png';


const ProjectData = [
    {
        id: 1,
        title: 'Sheba Mart Solution',
        date: '1 October,2022-present',
        about: 'Sheba Mart Solution is an online based e-commerce platform. This website offers different products to customers. This website is developed using MERN stack. This website has a user-friendly interface.',
        features: ['This is a full stack website that user can buy product from this site.', 'User can see the product details and seller details.', 'User can login with user and password as well as user can login with google account.', 'Designed and developed responsive & interactive user interface with Next.js, Redux, React, & so on.', 'User can pay there payment using stripe',' Created RESTful APIs using Express.js, Nest.js & integrated APIs to ensure seamless data flow'],
        technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Stripe.js', 'React-Hot-Toast', 'tailwindcss', 'daisyUI', 'React-icons'],
        live: 'https://sheba-mart-solution.web.app/',
        client: 'https://github.com/shebamart/shebamart-frontend',
        server: 'https://github.com/shebamart/premiumshebabackend',
        image: [sheba1, sheba2, sheba3, sheba4, sheba5],
    },
    {
        id: 2,
        title: 'Science Bee',
        date: '10 December 2023 - Present',
        about: 'Science Bee is an online based e-learning platform. This website offers different courses, quizes to students. This website is developed using MERN stack. This website has a user-friendly interface.',
        features: [' Implementing a robust website that offers courses to students, quizzes, Q&A, and many more services', 'It has an admin panel, Instructors panel, and user panel. All are independent based on their functionality.', 'User can login with user and password as well as user can login with google account.', 'Designed and developed responsive & interactive user interface with Next.js, Redux, React, & so on.', 'Created RESTful APIs using Express.js, Nest.js & integrated APIs to ensure seamless data flow'],
        technologies: ['Next.js', 'Node.js (Nest.js)', 'Mongoose', 'MongoDB', 'TypeScript', 'tailwindcss', 'daisyUI', 'AWS'],
        live: 'https://sciencebee.vercel.app/',
        client: 'https://github.com/shebamart/science_bee_frontend',
        server: 'https://github.com/shebamart/science_bee_backend',
        image: [bee1, bee2, bee3, bee4, bee5],
    },
    {
        id: 3,
        title: 'Masjid.Life',
        date: '5 May, 2024 - Present',
        about: 'Masjid.Life is a non-profit social organization that works with the light of Islam and serves all the people of different religions. This website helps financially to the poor people and also helps to the people who are in need.',
        features: ['Designed and developed responsive & interactive user interface with Next.js, Redux, React, & so on.', 'Created RESTful APIs using Express.js, Nest.js & integrated APIs to ensure seamless data flow', 'Developed server-side logic, ensuring high performance and responsiveness to requests from the app end', 'Designed APIs, database schemas, and optimized queries for efficient data retrieval and storage'],
        technologies: ['Next.js', 'Node.js (Nest.js)', 'Mongoose', 'MongoDB', 'TypeScript', 'tailwindcss', 'daisyUI', 'AWS'],
        live: '',
        client: 'https://github.com/shebamart/masjid.life_frontend.git',
        server: 'https://github.com/shebamart/masjid.life_backend.git',
        image: [masjid1, masjid2, masjid3],
    },
    {
        id: 4,
        title: 'Cinta Research',
        date: '12 October, 2023 - 20 December, 2023',
        about: 'Cinta Research is a research-based website. This website publishes different research papers, articles, and journals. This website is developed using MERN stack. This website has a user-friendly interface.',
        features: ['Designed and developed responsive & interactive user interface with Next.js, Redux, React, & so on.', 'admins can post research papers, articles and journals through this website.', 'Created RESTful APIs using Express.js, Nest.js & integrated APIs to ensure seamless data flow', 'Developed server-side logic, ensuring high performance and responsiveness to requests from the app end'],
        technologies: ['Next.js', 'Node.js', 'Express Js', 'Mongoose', 'MongoDB', 'tailwindcss', 'daisyUI', 'AWS'],
        live: 'https://thechinta.org/',
        client: 'https://github.com/sbiitju/the_chinta_frontend',
        server: 'https://github.com/sbiitju/thechinta.org_backend',
        image: [cinta1, cinta2, cinta3],
    },
    {
        id: 5,
        title: 'Shanto Hobby Development & Construction Limited - SHDCL',
        date: '',
        about: 'Shanto Hobby Development & Construction Limited is a construction company. This website mirrors their work and also job posts. This website is developed using MERN stack. This website has a user-friendly interface.',
        features: ['Designed and developed responsive & interactive user interface with React.', 'Created RESTful APIs using Node.js, Express.js & integrated APIs to ensure seamless data flow', 'Developed server-side logic, ensuring high performance and responsiveness to requests from the app end'],
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'React-Hot-Toast', 'tailwindcss', 'daisyUI', 'React-icons', 'AWS'],
        live: 'https://shdclgroup.com/',
        client: 'https://github.com/sbiitju/shdcl_frontend.git',
        server: 'https://github.com/sbiitju/shdcl_backend',
        image: [shdcl1, shdcl2, shdcl3, shdcl4],
    },
    {
      id: 6,
      title: "AI Universe Hub",
      date: "",
      about: "AI Universe Hub is a responsive landing page website using DOM Manipulation and Intermediate JavaScript. This website is developed using HTML5, ES6, CSS, Tailwind CSS, JavaScript, DOM, API, JSON. This website has a user-friendly interface.",
      features: ["A responsive website using intermediate JavaScript", ],
      "technologies": "HTML5, ES6, CSS, Tailwind CSS, JavaScript, DOM, API, JSON\r\n",
      live: "https://shimmering-blini-9fcc55.netlify.app/",
      client: "https://github.com/programming-hero-web-course2/b7a6-ai-universe-assignment-mim2041",
      image: [ AIHub1, AIHub2 ],
    },
    {
        id: 7,
        title: 'Snake Game',
        date: '',
        about: 'This is a simple snake game website. I is developed with row html, css and javascript.',
        features: ['This is a simple snake game website.'],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://vermillion-swan-160c5d.netlify.app/',
        client: "https://github.com/mim2041/snake-game",
        image: [ snake1, snake2, snake3],
    },
    {
        id: 8,
        title: "Tour Guide",
        date: "",
        about: "Tour Guide is a responsive landing page website using DOM Manipulation and Intermediate JavaScript. This website offers different places to view.",
        features: ["This is a Simple React JS Tour guide website.", "User can see the details of the place.", "User can delete the place.",],
        technologies: ["React", "JSX", "Tailwind CSS"],
        live: "https://shiny-donut-7eee2d.netlify.app/",
        client: "https://github.com/mim2041/tour-guide",
        image: [ tour1]
    },
    {
        id: 9,
        title: "Carrier Club",
        date: "",
        about: "This is basically a job sources website. Job lists are displayed in a decorated manner. There are 4 pages in this website. React router is used to navigate to these pages.",
        features: ["This is a Simple React JS job sources website.", "User can see the job details.", "A responsive website build using React & React Router.",],
        technologies: ["React", "JSX", "Tailwind CSS", "React Router", "Axios", "Rechart", "Context API"],
        live: "https://dashing-valkyrie-22fbb0.netlify.app",
        client : "https://github.com/programming-hero-web-course2/b7a5-geometry-genius-assignment-mim2041",
        image: [carrier1, carrier2, carrier3, carrier4, carrier5]
    },
    {
        id: 10,
        title: "Bengali Cuisine",
        date: "",
        about: "This is a Bengali Cuisine website developed with backend. Databases are stored in mongodb using node js and express js. This website offers different Bengali Cuisine details. This website has a user-friendly interface.",
        features: ["A full stack website with Bengali Cuisine details.", "Only authenticated user can see the cuisine details.", "Different categories of foods are displayed in a decorated manner.", "User can see the details of the food.",],
        technologies: ["React.js", "Tailwind CSS", "Context API", "Firebase", "Node.js", "Mongodb", "Express.js"],
        live: "https://chef-recipe-hunter-9c6c6.web.app/",
        client : "https://github.com/mim2041/chef-recipe-hunter-client",
        server : "https://github.com/mim2041/chef-recipe-hunter-server",
        image: [cuisine1, cuisine2, cuisine3],
    },
    {
        id: 11,
        title: "Fairy Tales",
        date: "",
        about: "A online toy marketplace website that offers a wide range of dolls toys for childreen. The website is developed with react, node js and many more technologies. It contains five webpages.",
        features: ["A online based toy marketplace website that offers a wide range of toys for kids.", "Only authenticate users can view the toy section", "User can login with user and password as well as user can login with google account.", "User can pay there payment using stripe",],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe.js", "React-Hot-Toast", "tailwindcss", "daisyUI", "React-icons"],
        live: "https://disney-dolls-gallery.web.app/",
        client: "https://github.com/mim2041/disny-dolls-gallery-client",
        server: "https://github.com/mim2041/disny-dolls-gallery-server",
        image: [fairy1, fairy2, fairy3],
    },
    {
        id: 12,
        title: "Dancing School",
        date: "",
        about: "A online dancing school website that offers a wide range of dancing courses. The website is developed with react, node js and many more technologies. It contains five webpages.",
        features: ["A MERN stack dance teaching school.", "Only authenticate users can view the dance courses", "User can login with user and password as well as user can login with google account.", "User can pay there payment using stripe",],
        technologies: ["React", "React Router", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe.js", "React-Hot-Toast", "tailwindcss", "daisyUI", "React-icons"],
        live: "https://dancing-school-27a07.web.app/",
        client : "https://github.com/mim2041/dancing-school-client",
        server : "https://github.com/mim2041/dancing-school-server",
        image: [dance1, dance2],
    }
];


export default ProjectData;
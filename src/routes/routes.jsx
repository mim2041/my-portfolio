import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import Home from "../pages/Home/index"; 
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Portfolio/Project";
import Portfolio from "../pages/Portfolio/Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <div>About</div> // Placeholder element
            },
            {
                path: "/projects",
                element: <Portfolio />
            },
            {
                path: "/projects/:name",
                element: <Project />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);

export default router;

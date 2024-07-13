import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import Home from "../pages/Home/index"; 
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";

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

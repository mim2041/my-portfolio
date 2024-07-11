import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import Home from "../pages/Home/index"; 

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
            }
        ]
    }
]);

export default router;

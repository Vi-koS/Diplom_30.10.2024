import { createBrowserRouter } from "react-router-dom";
import Not_Found from "./components/pages/Not_Found/notFound";
import Home from "./components/pages/Home";


const router = createBrowserRouter([
    {
        path: "*",
        element: <Not_Found/>
    },
    {
        path: "/",
        element: <Home/>
    },

]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import Not_Found from "./components/pages/Not_Found/notFound";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Not_Found/>
    },

]);
export default router;
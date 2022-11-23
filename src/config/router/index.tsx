import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/home/views/Home";
import Services from "@/pages/services/views/Services";
import Experience from "@/pages/experience/views/Experience";
import PageNotFound from "@/components/PageNotFound";

const router  = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'experience',
          element: <Experience />
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound />
    }
  ])

export default router;
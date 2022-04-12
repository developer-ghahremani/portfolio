import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Resume from "./Resume";
import { pageNames } from "constant";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: pageNames.home,
    element: <Home />,
  },
  {
    path: pageNames.aboutMe,
    element: <AboutMe />,
  },
  {
    path: pageNames.contactMe,
    element: <ContactMe />,
  },
  {
    path: pageNames.resume,
    element: <Resume />,
  },
];

export default routes;

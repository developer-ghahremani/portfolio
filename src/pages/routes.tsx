import AboutMe from "./AboutMe";
import Company from "./Company";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Resume from "./Resume";
import Skills from "./Skills";
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
  {
    path: pageNames.skills,
    element: <Skills />,
  },
  {
    path: pageNames.company,
    element: <Company />,
  },
];

export default routes;

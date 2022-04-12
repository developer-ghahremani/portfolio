import { CallIcon, HomeIcon, ProfileIcon, WorkIcon } from "components/icons";
import { Link, useLocation } from "react-router-dom";

import { pageNames } from "constant";
import { range } from "lodash";

const MiniSideBar = () => {
  const { pathname } = useLocation();

  const options = [
    {
      icon: (
        <HomeIcon
          size={18}
          color={pageNames.home === pathname ? "white" : "black"}
        />
      ),
      title: "home",
      to: pageNames.home,
    },
    {
      icon: (
        <ProfileIcon
          size={18}
          color={pageNames.aboutMe === pathname ? "white" : "black"}
        />
      ),
      title: "home",
      to: pageNames.aboutMe,
    },
    {
      icon: (
        <WorkIcon
          size={18}
          color={pageNames.resume === pathname ? "white" : "black"}
        />
      ),
      title: "home",
      to: pageNames.resume,
    },
    {
      icon: (
        <CallIcon
          size={18}
          color={pageNames.contactMe === pathname ? "white" : "black"}
        />
      ),
      title: "home",
      to: pageNames.contactMe,
    },
  ];

  return (
    <div className=" bg-primary-dark flex flex-col px-2 py-3 rounded-full items-center">
      {options.map((option, index, array) => (
        <div>
          <Link to={option.to}>{option.icon}</Link>
          {index !== array.length - 1 && (
            <div className=" flex flex-col items-center justify-between h-5 my-1">
              {range(3).map(() => (
                <span className="w-[3px] h-[3px] bg-slate-100 rounded-full" />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MiniSideBar;

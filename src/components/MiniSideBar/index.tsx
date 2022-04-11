import { HomeIcon } from "components/icons";
import { Link } from "react-router-dom";
import React from "react";
import { range } from "lodash";

type Props = {};

const MiniSideBar = (props: Props) => {
  const options = [
    {
      icon: <HomeIcon size={22} color="white" />,
      title: "home",
      to: "/",
    },
    {
      icon: <HomeIcon size={22} color="white" />,
      title: "home",
      to: "/",
    },
    {
      icon: <HomeIcon size={22} color="white" />,
      title: "home",
      to: "/",
    },
    {
      icon: <HomeIcon size={22} color="white" />,
      title: "home",
      to: "/",
    },
    {
      icon: <HomeIcon size={22} color="white" />,
      title: "home",
      to: "/",
    },
  ];
  return (
    <div className=" bg-primary flex flex-col px-2 py-3 rounded-full">
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

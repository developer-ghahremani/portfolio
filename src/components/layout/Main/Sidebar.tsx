import i18n, { useI18Next } from "i18n";

import { Link } from "react-router-dom";
import React from "react";
import { pageNames } from "constant";
import { range } from "lodash";

const Sidebar = () => {
  const { t } = useI18Next();

  const handleChangeLanguage = (language: "fa" | "en") => {
    i18n.changeLanguage(language);
  };

  const options = [
    { title: t("general.home"), route: pageNames.home },
    { title: t("general.aboutMe"), route: pageNames.aboutMe },
    { title: t("general.resume"), route: pageNames.resume },

    { title: t("general.contactWithMe"), route: pageNames.contactMe },
  ];

  return (
    <div className="md:flex hidden w-[25%] h-[100vh] bg-primary flex-col ">
      <div
        // src={require("assets/images/me4.jpg")}
        className="bg-secondary h-72 object-cover w-full"
        // alt=""
      />
      <div className=" flex flex-col items-center justify-between w-full h-full py-8">
        {options.map((option, index, array) => (
          <>
            <Link to={option.route}>
              <p className="text-sm font-bold">{option.title}</p>
            </Link>
            {index !== array.length - 1 && (
              <div className="flex flex-col items-start justify-between flex-1">
                {range(25).map((item) => (
                  <span className="w-[2px] h-[2px] rounded-full bg-black" />
                ))}
              </div>
            )}
          </>
        ))}

        <div className=" flex mt-4">
          <img
            src={require("assets/images/iran.png")}
            alt=""
            className="w-8 mx-1 cursor-pointer"
            onClick={() => handleChangeLanguage("fa")}
          />
          <img
            src={require("assets/images/united-kingdom.png")}
            alt=""
            className="w-8 mx-1 cursor-pointer"
            onClick={() => handleChangeLanguage("en")}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";

import { Link } from "react-router-dom";
import MiniSideBar from "components/MiniSideBar";
import MobileHeader from "components/MobileHeader";
import MobileMenu from "components/MobileMenu";
import { pageNames } from "constant";
import { range } from "lodash";
import { useI18Next } from "i18n";

type Props = { children: React.ReactNode; title: string };

const MainLayout = ({ children, title }: Props) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const { t } = useI18Next();
  const options = [
    { title: t("general.home"), route: pageNames.home },
    { title: t("general.aboutMe"), route: pageNames.aboutMe },
    { title: t("general.resume"), route: pageNames.resume },

    { title: t("general.contactWithMe"), route: pageNames.contactMe },
  ];

  const toggleMenu = () => {
    setMobileMenu((s) => !s);
  };

  return (
    <div className="w-full h-[100vh] flex relative">
      <div className="md:flex hidden w-[25%] h-[100vh] bg-primary flex-col">
        <div
          // src={require("assets/images/me4.jpg")}
          className="w-full object-cover bg-secondary h-72"
          // alt=""
        />
        <div className="flex h-full w-full py-8 justify-between items-center flex-col">
          {options.map((option, index, array) => (
            <>
              <Link to={option.route}>
                <p className="font-bold text-sm">{option.title}</p>
              </Link>
              {index !== array.length - 1 && (
                <div className="flex-1 flex flex-col items-start justify-between">
                  {range(25).map((item) => (
                    <span className="w-[2px] h-[2px] rounded-full bg-black" />
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="px-8">
          <MobileHeader onClickMenu={toggleMenu} />
        </div>
        <div className="bg-white md:bg-secondary px-8 md:px-14 pt-8 h-[100vh] overflow-y-scroll">
          <p className="text-7xl text-center font-black border-2 border-dotted p-4 border-black mb-4">
            {title}
          </p>
          {children}
        </div>
      </div>
      <div className="md:flex top-[35%] absolute right-0 items-center justify-end hidden w-auto px-4">
        <MiniSideBar />
      </div>
      {mobileMenu && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

export default MainLayout;

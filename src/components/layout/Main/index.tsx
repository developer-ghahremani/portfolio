import React, { useState } from "react";

import { Link } from "react-router-dom";
import MiniSideBar from "components/MiniSideBar";
import MobileHeader from "components/MobileHeader";
import MobileMenu from "components/MobileMenu";
import Sidebar from "./Sidebar";
import { pageNames } from "constant";
import { range } from "lodash";
import { useI18Next } from "i18n";

type Props = { children: React.ReactNode; title: string };

const MainLayout = ({ children, title }: Props) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setMobileMenu((s) => !s);
  };

  return (
    <div className="w-full h-[100vh] flex relative">
      <Sidebar />
      <div className="flex-1">
        <div className="px-8">
          <MobileHeader onClickMenu={toggleMenu} />
        </div>
        <div className="bg-white md:bg-secondary px-8 md:px-14 pt-8 h-[100vh] overflow-y-scroll">
          <p className="text-7xl p-4 mb-4 font-black text-center border-2 border-black border-dotted">
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

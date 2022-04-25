import React, { useEffect, useState } from "react";
import { getCurrentLanguage, useI18Next } from "i18n";

import { Helmet } from "react-helmet";
import MiniSideBar from "components/MiniSideBar";
import MobileHeader from "components/MobileHeader";
import MobileMenu from "components/MobileMenu";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

type Props = { children: React.ReactNode; title: string };

const MainLayout = ({ children, title }: Props) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const currentLanguage = getCurrentLanguage();
  const { pathname } = useLocation();
  const { t } = useI18Next();

  const toggleMenu = () => {
    setMobileMenu((s) => !s);
  };

  useEffect(() => {
    changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (currentLanguage: "fa" | "en") => {
    if (currentLanguage === "en") {
      document.body.className = "ltr font-nunito";
    } else if (currentLanguage === "fa") {
      document.body.className = "rtl font-vazir";
    }
  };

  return (
    <div className="w-full h-[100vh] flex relative">
      <Helmet>
        <title>
          {t("general.myName")} - {t(`general.${pathname.replace("/", "")}`)}
        </title>
      </Helmet>
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
          <div className="h-6"></div>
        </div>
      </div>
      <div
        className={`md:flex top-[35%] absolute ${
          currentLanguage === "fa" ? "left-0" : "right-0"
        } items-center justify-end hidden w-auto px-4`}>
        <MiniSideBar />
      </div>
      {mobileMenu && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

export default MainLayout;

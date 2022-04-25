import { MobileHeader, MobileMenu } from "components";
import { getCurrentLanguage, useI18Next } from "i18n";

import { Helmet } from "react-helmet";
import { ISlider } from "components/general";
import MiniSideBar from "components/MiniSideBar";
import { pageNames } from "constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useI18Next();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const currentLanguage = getCurrentLanguage();

  const toggleMobileMenu = () => {
    setMobileMenu((s) => !s);
  };

  const handleAboutUs = () => {
    navigate(pageNames.aboutMe);
  };

  return (
    <div className="w-full h-[100vh] relative overflow-hidden">
      <Helmet>
        <title>{t("general.myName")}</title>
      </Helmet>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full h-[100vh] absolute">
        <div className="md:justify-center flex flex-col items-start justify-between flex-1 px-8">
          <MobileHeader onClickMenu={toggleMobileMenu} />
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold uppercase">
              {t("general.hiThere")}
            </h3>
            <h3 className="text-5xl font-bold uppercase">
              {t("general.iAm")}
              <strong className="text-primary mx-2">
                {t("general.myName")}
              </strong>
            </h3>
            <h5 className="bg-primary px-1 mt-2 font-bold text-black rounded-sm">
              {t("general.myJob")}
            </h5>
            <p className="my-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis rem et, corrupti eum aut facere asperiores a. Eos,
              natus excepturi?
            </p>
            <button
              className="bg-primary px-4 py-3 font-bold text-white rounded-full"
              onClick={handleAboutUs}>
              {t("general.moreAboutMe")}
            </button>
          </div>
          <div></div>
        </div>
        <div className="md:block relative hidden h-[100%] test">
          <div className="absolute w-full h-[100vh]">
            <ISlider
              items={[
                {
                  image:
                    "https://s6.uupload.ir/files/pexels-thisisengineering-3861959_xidj.jpg",
                },
                {
                  image:
                    "https://s6.uupload.ir/files/pexels-markus-spiske-225250_600c.jpg",
                },
                {
                  image:
                    "https://s6.uupload.ir/files/pexels-christina-morillo-1181673_mmw7.jpg",
                },
                {
                  image:
                    "https://s6.uupload.ir/files/pexels-anete-lusina-4792728_zx70.jpg",
                },
                {
                  image:
                    "https://s6.uupload.ir/files/pexels-cottonbro-4709293_v3u5.jpg",
                },
              ]}
            />
          </div>
          <div className="w-full from-white bg-gradient-to-r   h-[100vh] absolute"></div>
        </div>
      </div>
      <div
        className={`md:flex top-[35%] absolute ${
          currentLanguage === "fa" ? "left-0" : "right-0"
        } items-center justify-end hidden w-auto px-4`}>
        <MiniSideBar />
      </div>
      {/* <div className="md:flex top-[35%] absolute right-0 items-center justify-end hidden w-auto px-4">
        <MiniSideBar />
      </div> */}
      {mobileMenu && <MobileMenu onClose={toggleMobileMenu} />}
    </div>
  );
};

export default Home;

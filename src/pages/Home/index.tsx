import MiniSideBar from "components/MiniSideBar";
import { MobileMenu } from "components";
import { MoreVerticalIcon } from "components/icons";
import { useI18Next } from "i18n";
import { useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const { t } = useI18Next();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenu((s) => !s);
  };

  const handleAboutUs = () => {
    console.log("residam");
  };

  return (
    <div className="w-full h-[100vh] relative">
      <div className="md:flex-row flex flex-col w-full h-[100vh] absolute">
        <div className="md:justify-center flex flex-col items-start justify-between flex-1 px-8">
          <div className="md:hidden bg-secondary flex flex-row items-center justify-between w-full px-4 py-2 mt-2 bg-opacity-50 rounded-full">
            <img
              src={require("assets/images/me4.jpg")}
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <MoreVerticalIcon
              onClick={toggleMobileMenu}
              className="cursor-pointer"
              size={24}
              color="black"
            />
          </div>
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
        <div className="md:flex flex-1 hidden bg-gray-400">
          {/* <img
            src={require("assets/images/me4.jpg")}
            className="object-cover"
            alt=""
          /> */}
        </div>
      </div>
      <div className="md:flex top-[30%] absolute right-0 items-center justify-end hidden w-auto px-4">
        <MiniSideBar />
      </div>
      {mobileMenu && <MobileMenu onClose={toggleMobileMenu} />}
    </div>
  );
};

export default Home;

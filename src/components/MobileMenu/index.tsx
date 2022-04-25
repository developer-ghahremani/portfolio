import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "components/icons";
import i18n, { useI18Next } from "i18n";
import { pageNames, socialLinks } from "constant";

import { Link } from "react-router-dom";

type Props = { onClose: () => void };

const MobileMenu = ({ onClose }: Props) => {
  const options: { title: string; icon: JSX.Element; link: string }[] = [
    {
      icon: <InstagramIcon width={25} />,
      title: "instagram",
      link: socialLinks.instagram,
    },
    {
      icon: <FacebookIcon width={25} />,
      title: "facebook",
      link: socialLinks.facebook,
    },
    {
      icon: <WhatsAppIcon width={25} />,
      title: "whatsapp",
      link: socialLinks.whatsapp,
    },
    {
      icon: <TelegramIcon width={25} />,
      title: "telegram",
      link: socialLinks.telegram,
    },
  ];
  const handleChangeLanguage = (params: "fa" | "en") => {
    if (params === "fa") return i18n.changeLanguage("fa");
    i18n.changeLanguage("en");
  };

  const { t } = useI18Next();
  return (
    <div className="md:hidden bg-secondary slide-left absolute right-0 flex flex-col justify-between w-2/3 h-full">
      <div className="flex flex-col">
        <CloseIcon
          size={28}
          className="self-end m-3 cursor-pointer"
          onClick={onClose}
        />
        <div className="flex flex-col">
          {[
            {
              to: pageNames.home,
              title: t("general.home"),
            },
            {
              to: pageNames.aboutMe,
              title: t("general.aboutMe"),
            },
            {
              to: pageNames.resume,
              title: t("general.resume"),
            },
            {
              to: pageNames.skills,
              title: t("general.skills"),
            },
            {
              to: pageNames.company,
              title: t("general.companies"),
            },
            {
              to: pageNames.contactMe,
              title: t("general.contactWithMe"),
            },
          ].map((item) => (
            <Link
              to={item.to}
              className="text py-1 font-bold text-center border-t border-b cursor-pointer">
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
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
        <div className="bg-primary flex justify-around w-full py-2 mt-4">
          {options.map((item) => (
            <a
              href={item.link}
              key={item.title}
              target="_blank"
              rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

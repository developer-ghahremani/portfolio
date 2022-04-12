import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "components/icons";

import { Link } from "react-router-dom";
import { pageNames } from "constant";
import { useI18Next } from "i18n";

type Props = { onClose: () => void };

const MobileMenu = ({ onClose }: Props) => {
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
      <div className="bg-primary flex justify-around py-2">
        <InstagramIcon />
        <FacebookIcon />
        <TelegramIcon />
        <WhatsAppIcon />
      </div>
    </div>
  );
};

export default MobileMenu;

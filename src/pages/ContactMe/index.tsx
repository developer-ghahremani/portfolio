import {
  CallOutlinedIcon,
  ComputerIcon,
  FacebookIcon2,
  InstagramIcon2,
  TelegramIcon2,
  WhatsAppIcon2,
} from "components/icons";
import { getCurrentLanguage, useI18Next } from "i18n";

import { MainLayout } from "components/layout";
import { socialLinks } from "constant";

type Props = {};

const ContactMe = (props: Props) => {
  const { t } = useI18Next();
  const options: { title: string; icon: JSX.Element; link: string }[] = [
    {
      icon: <InstagramIcon2 width={25} />,
      title: "instagram",
      link: socialLinks.instagram,
    },
    {
      icon: <FacebookIcon2 width={25} />,
      title: "facebook",
      link: socialLinks.facebook,
    },
    {
      icon: <WhatsAppIcon2 width={25} />,
      title: "whatsapp",
      link: socialLinks.whatsapp,
    },
    {
      icon: <TelegramIcon2 width={25} />,
      title: "telegram",
      link: socialLinks.telegram,
    },
  ];

  return (
    <MainLayout title={t("general.contactWithMe")}>
      <div className="h-[75%] w-full flex flex-col justify-between">
        {getCurrentLanguage() === "en" ? (
          <p className="text-2xl">
            {t("general.feel")} <strong>{t("general.free")}</strong>
            {t("general.toContactMe")}!
          </p>
        ) : (
          <p className="text-2xl">{t("general.feelFreeToContactMe")}</p>
        )}

        <div className="md:flex-row flex flex-col justify-between">
          <div className="lg:justify-start flex flex-row items-center justify-center">
            <ComputerIcon width={100} />
            <div className="flex flex-col items-center mx-2 font-semibold">
              <p>www.rezaghahremani.ir</p>
              <a
                href="mailto:developer.ghahremani@gmail.com"
                target="_blank"
                rel="noreferrer">
                <p>developer.ghahremani@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="lg:justify-start flex flex-row items-center justify-center">
            <CallOutlinedIcon width={100} />
            <div className="flex flex-col items-center mx-2 font-semibold">
              <a href="callto:00989126894100" target="_blank" rel="noreferrer">
                <p>+98 912 689 4100</p>
              </a>
              <a href="callto:00989900880072" target="_blank" rel="noreferrer">
                <p>+98 990 088 0072</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-primary flex justify-center px-4 py-2 rounded-full">
            {options.map((option) => (
              <a
                className="hover:scale-[2] mx-4 duration-500 cursor-pointer"
                href={option.link}
                key={option.title}
                target="_blank"
                rel="noopener noreferrer">
                {option.icon}
              </a>
            ))}
          </div>
          <p className=" text-2xl font-black tracking-wider text-center">
            {t("general.thanksForAttention")}
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactMe;

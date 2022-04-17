import { CallOutlinedIcon, ComputerIcon } from "components/icons";
import { getCurrentLanguage, useI18Next } from "i18n";

import { MainLayout } from "components/layout";

type Props = {};

const ContactMe = (props: Props) => {
  const { t } = useI18Next();

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
          <div className="flex flex-row items-center">
            <ComputerIcon width={100} />
            <div className="flex flex-col items-center mx-2 font-semibold">
              <p>www.rezaghahremani.ir</p>
              <a href="mailto:developer.ghahremani@gmail.com" target="_blank">
                <p>developer.ghahremani@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <CallOutlinedIcon width={100} />
            <div className="flex flex-col items-center mx-2 font-semibold">
              <a href="callto:00989126894100" target="_blank">
                <p>+98 912 689 4100</p>
              </a>
              <a href="callto:00989900880072" target="_blank">
                <p>+98 990 088 0072</p>
              </a>
            </div>
          </div>
        </div>

        <p className=" text-2xl font-black tracking-wider text-center">
          {t("general.thanksForAttention")}
        </p>
      </div>
    </MainLayout>
  );
};

export default ContactMe;

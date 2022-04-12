import { MainLayout } from "components/layout";
import React from "react";
import { skills } from "constant";
import { useI18Next } from "i18n";

const Resume = () => {
  const { t } = useI18Next();
  return (
    <MainLayout title={t("general.resume")}>
      <p className="font-bold text-2xl">{t("general.skills")}</p>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 mt-4">
        {skills.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <div className="w-[5rem] h-[5rem] rounded-full flex justify-center items-center bg-white shadow-xl">
              <img
                src={item.image}
                alt=""
                className="w-[4rem] h-[4rem] object-contain"
              />
            </div>
            <p className="text-xs font-bold uppercase mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Resume;

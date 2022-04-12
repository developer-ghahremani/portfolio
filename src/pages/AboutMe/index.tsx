import { AboutMe1Item } from "components/items";
import { DevelopmentIcon } from "components/icons";
import { MainLayout } from "components/layout";
import { useI18Next } from "i18n";

const AboutMe = () => {
  const { t } = useI18Next();
  return (
    <MainLayout title={t("general.aboutMe")}>
      <div className="flex flex-col h-[calc(100%-8rem)] justify-between">
        <div>
          <p className="text-2xl ">
            {t("general.iAm")} <strong>{t("general.myName")},</strong>{" "}
            {t("general.myJob")}
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea
            tempora, esse tempore consequuntur aliquid quas expedita iure
            voluptate corrupti. Sed deserunt perferendis rerum facere fugit
            exercitationem commodi. Numquam vitae a dolorum, minus et eos quos
            maiores ea voluptatum itaque!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-8">
          <div className="bg-black w-full md:col-span-3 flex flex-col md:flex-row text-white p-4">
            <div className="felx flex-col items-center flex-1 md:border-r-2">
              <AboutMe1Item
                withBorderBottom
                title={t("general.yearsExperience")}
                value={3}
              />
              <AboutMe1Item title={t("general.projects")} value={10} />
            </div>
            <div className="felx flex-col items-center flex-1">
              <AboutMe1Item
                withBorderBottom
                title={t("general.companies")}
                value={8}
              />
              <AboutMe1Item title={t("general.titleSkills")} value={15} />
            </div>
          </div>

          <div className="bg-primary w-full md:col-span-2 flex flex-col px-4">
            <p className="font-bold text-xl">{t("general.whatIDo")}</p>

            <div className="flex-1 flex items-center ">
              <DevelopmentIcon width={250} />
              <div className="flex flex-col">
                <p className="font-bold">TITLE</p>
                <p className="text-xs text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus cupiditate beatae dolorem dolores voluptatum mollitia
                  odio quae nemo sapiente consectetur!
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center ">
              <DevelopmentIcon width={250} />
              <div className="flex flex-col">
                <p className="font-bold">TITLE</p>
                <p className="text-xs text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus cupiditate beatae dolorem dolores voluptatum mollitia
                  odio quae nemo sapiente consectetur!
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center ">
              <DevelopmentIcon width={250} />
              <div className="flex flex-col">
                <p className="font-bold">TITLE</p>
                <p className="text-xs text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus cupiditate beatae dolorem dolores voluptatum mollitia
                  odio quae nemo sapiente consectetur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutMe;

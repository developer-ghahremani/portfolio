import { AboutMe1Item } from "components/items";
import { DevelopmentIcon } from "components/icons";
import { MainLayout } from "components/layout";
import { useI18Next } from "i18n";

const AboutMe = () => {
  const { t } = useI18Next();
  const options: { title: string; description: string; id: number }[] = [
    {
      id: 1,
      title: t("general.beforeSartingTheProject"),
      description: t("general.beforeSartingTheProjectSlug"),
    },
    {
      id: 2,
      title: t("general.afterSartingTheProject"),
      description: t("general.afterSartingTheProjectSlug"),
    },
    {
      id: 3,
      title: t("general.duringTheProject"),
      description: t("general.duringTheProjectSlug"),
    },
  ];
  return (
    <MainLayout title={t("general.aboutMe")}>
      <div>
        <div>
          <p className=" text-2xl">
            {t("general.iAm")} <strong>{t("general.myName")},</strong>{" "}
            {t("general.myJob")}
          </p>
          <p className="mt-2">{t("general.aboutUsSlug")}</p>
        </div>
        <div className="lg:grid-cols-5 grid grid-cols-1 mt-8">
          <div className="md:col-span-3 md:flex-row flex flex-col w-full p-4 text-white bg-black">
            <div className="felx md:border-r-2 flex-col items-center flex-1">
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
                title={t("general.company")}
                value={5}
              />
              <AboutMe1Item title={t("general.titleSkills")} value={15} />
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col justify-between w-full px-4">
            <p className="mt-2 text-xl font-bold">{t("general.whatIDo")}</p>

            {options.map((item) => (
              <div className=" flex items-center" key={item.id}>
                <DevelopmentIcon width={80} height={80} />
                <div className="flex flex-col flex-1">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutMe;

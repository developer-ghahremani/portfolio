import { MainLayout } from "components/layout";
import { SkillItem } from "components/items";
import { skills } from "constant";
import { useI18Next } from "i18n";

const Skills = () => {
  const { t } = useI18Next();
  return (
    <MainLayout title={t("general.skills")}>
      <p className="text-2xl font-bold">{t("general.skills")}</p>
      <div className="md:grid-cols-5 lg:grid-cols-7 grid grid-cols-3 gap-2 mt-4">
        {skills.map((item) => (
          <SkillItem skill={item} key={item.title} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Skills;

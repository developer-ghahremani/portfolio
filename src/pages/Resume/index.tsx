import { MainLayout } from "components/layout";
import { useI18Next } from "i18n";

const Resume = () => {
  const { t } = useI18Next();
  return (
    <MainLayout title={t("general.resume")}>
      <p className="text-2xl font-black">
        {t("general.workExperienceAndProjects")}
      </p>
      <div className="lg:grid-cols-3 grid grid-cols-1">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
    </MainLayout>
  );
};

export default Resume;

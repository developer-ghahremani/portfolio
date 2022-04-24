import { CompanyItem } from "components/items";
import { MainLayout } from "components/layout";
import compnaies from "constant/companies";
import { useI18Next } from "i18n";

const Company = () => {
  const { t } = useI18Next();
  return (
    <MainLayout title={t("general.company")}>
      <h1 className="text-2xl font-black">{t("general.companies")}</h1>
      <div className="lg:grid-cols-3 gap-x-2 gap-y-4 grid grid-cols-1">
        {[...compnaies].map((company) => (
          <CompanyItem company={company} key={company.id} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Company;

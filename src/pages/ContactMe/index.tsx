import { MainLayout } from "components/layout";
import { useI18Next } from "i18n";

type Props = {};

const ContactMe = (props: Props) => {
  const { t } = useI18Next();
  return <MainLayout title={t("general.contactWithMe")}>ContactMe</MainLayout>;
};

export default ContactMe;

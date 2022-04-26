import { Link } from "react-router-dom";
import { MenuIcon } from "components/icons";
import { pageNames } from "constant";
import { useI18Next } from "i18n";

type Props = { onClickMenu: () => void };

const MobileHeader = ({ onClickMenu }: Props) => {
  const { t } = useI18Next();
  return (
    <div className="md:hidden flex flex-row items-center justify-between w-full px-4 py-2 mt-2 bg-opacity-50 rounded-full">
      <img
        src={require("assets/images/me4.jpg")}
        className="w-8 h-8 rounded-full"
        alt=""
      />
      <Link to={pageNames.home}>
        <p className="font-bold">{t("general.myName")}</p>
      </Link>
      <MenuIcon
        onClick={onClickMenu}
        className="cursor-pointer"
        size={24}
        color="black"
      />
    </div>
  );
};

export default MobileHeader;

import { MoreVerticalIcon } from "components/icons";

type Props = { onClickMenu: () => void };

const MobileHeader = ({ onClickMenu }: Props) => {
  return (
    <div className="md:hidden bg-secondary flex flex-row items-center justify-between w-full px-4 py-2 mt-2 bg-opacity-50 rounded-full">
      <img
        src={require("assets/images/me4.jpg")}
        className="w-8 h-8 rounded-full"
        alt=""
      />
      <MoreVerticalIcon
        onClick={onClickMenu}
        className="cursor-pointer"
        size={24}
        color="black"
      />
    </div>
  );
};

export default MobileHeader;

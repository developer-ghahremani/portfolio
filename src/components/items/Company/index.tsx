import CompanyModel from "models/Company";
import { getCurrentLanguage } from "i18n";

type Props = { company: CompanyModel };

const Company = (props: Props) => {
  const lang = getCurrentLanguage();
  return (
    <div className="rounded-2xl hover:shadow-lg p-2 border-2 border-white cursor-pointer">
      <div className=" lg:flex-row lg:items-start flex flex-col items-center w-full">
        <img
          src={props.company.logo}
          className="w-20 h-20 rounded-full"
          alt="LOGO"
        />
        <div className=" flex flex-col justify-center h-20 px-2">
          <p className=" font-bold">{props.company.title[lang]}</p>
        </div>
      </div>
    </div>
  );
};

export default Company;

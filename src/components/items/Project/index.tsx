import { getCurrentLanguage, useI18Next } from "i18n";

import Project from "models/Project";
import compnaies from "constant/companies";
import moment from "moment";

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectItem = (props: Props) => {
  const lang = getCurrentLanguage();
  const { t } = useI18Next();

  const handleClick = () => {
    props.onClick(props.project);
  };

  return (
    <div
      className="hover:shadow-xl hover:bg-primary hover:rounded-xl group flex flex-col items-start w-full p-2 duration-500 cursor-pointer"
      onClick={handleClick}>
      <p className="bg-primary group-hover:text-primary group-hover:bg-white px-2 py-1 text-sm font-bold text-white duration-1000 rounded-md">
        {`${moment(props.project.from).add(-1, "month").format("YYYY/MM")} - ${
          !!props.project.to
            ? moment(props.project.to).add(-1, "month").format("YYYY/MM/DD")
            : t("general.now")
        }
          `}
      </p>
      <p className="mt-2 font-bold">{`${props.project.jobTitle[lang]} ${t(
        "general.at"
      )} ${
        compnaies.find((t) => t.id === props.project.companyId)?.title[lang]
      }`}</p>
      <p className="mt-2 text-gray-600">
        {props.project.shortDescription[lang]}
      </p>
    </div>
  );
};

export default ProjectItem;

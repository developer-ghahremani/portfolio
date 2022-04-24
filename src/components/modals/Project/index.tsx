import { IModal, ISlider } from "components/general";

import { CloseIcon } from "components/icons";
import { ImodalProps } from "components/general/Modal";
import Project from "models/Project";
import compnaies from "constant/companies";
import { divide } from "lodash";
import { getCurrentLanguage } from "i18n";
import moment from "moment";

interface Props extends ImodalProps {
  project: Project;
}

const ProjectModal = ({ project, ...props }: Props) => {
  const lang = getCurrentLanguage();
  const company = compnaies.find((item) => item.id === project.companyId);
  return (
    <IModal {...props}>
      <div className="flex flex-col h-full">
        <CloseIcon
          className="text-primary text-3xl cursor-pointer"
          onClick={() => props.onClose()}
        />
        <div className="md:flex-row flex flex-col h-full">
          <div className="divide-dashed flex flex-col flex-1 px-4 divide-y-2">
            <div className="flex flex-col items-start">
              <p className="text-[2rem] font-bold">{project.title[lang]}</p>
              <p className="bg-primary px-2 py-1 font-bold text-white text-[1rem]">
                {`${moment(project.from).format("YYYY/MM/DD")} - ${moment(
                  project.to
                ).format("YYYY/MM/DD")}`}
              </p>
              <p className="text-[.8rem]">{project.description[lang]}</p>
            </div>
            <div className="flex flex-col items-start mt-4">
              <div className=" flex items-center">
                <img
                  src={company?.logo}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
                <p className="text-[2rem] font-bold mx-4">
                  {company?.title[lang]}
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex-1 h-full">
            <div className=" absolute w-full h-full overflow-x-hidden">
              {/* <ISlider
                className=" h-ful w-full"
                items={[
                  {
                    image:
                      "https://s6.uupload.ir/files/pexels-thisisengineering-3861959_xidj.jpg",
                  },
                  {
                    image:
                      "https://s6.uupload.ir/files/pexels-markus-spiske-225250_600c.jpg",
                  },
                  {
                    image:
                      "https://s6.uupload.ir/files/pexels-christina-morillo-1181673_mmw7.jpg",
                  },
                  {
                    image:
                      "https://s6.uupload.ir/files/pexels-anete-lusina-4792728_zx70.jpg",
                  },
                  {
                    image:
                      "https://s6.uupload.ir/files/pexels-cottonbro-4709293_v3u5.jpg",
                  },
                ]}
              /> */}
            </div>
            <div className="bg-gradient-to-r to-primary from-transparent absolute z-20 w-full h-full" />
          </div>
        </div>
      </div>
    </IModal>
  );
};

export default ProjectModal;

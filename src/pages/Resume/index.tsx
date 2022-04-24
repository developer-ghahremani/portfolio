import { MainLayout } from "components/layout";
import Project from "models/Project";
import { ProjectItem } from "components/items";
import { ProjectModal } from "components/modals";
import { projects } from "constant";
import { useI18Next } from "i18n";
import { useState } from "react";

const Resume = () => {
  const { t } = useI18Next();
  const [state, setState] = useState<{
    projectModal: boolean;
    selectedProject?: Project;
  }>({ projectModal: false });

  const toggleProjectModal = (selectedProject: Project | void) => {
    if (!selectedProject)
      return setState((s) => ({ ...s, projectModal: false }));
    setState((s) => ({ ...s, projectModal: !s.projectModal, selectedProject }));
  };

  return (
    <MainLayout title={t("general.resume")}>
      <p className="text-2xl font-black">
        {t("general.workExperienceAndProjects")}
      </p>
      <div className="lg:grid-cols-3 gap-x-2 gap-y-4 grid grid-cols-1">
        {[...projects].reverse().map((project) => (
          <ProjectItem
            onClick={toggleProjectModal}
            project={project}
            key={project.id}
          />
        ))}
      </div>
      {state.selectedProject && (
        <ProjectModal
          project={state.selectedProject}
          onClose={toggleProjectModal}
          isOpen={state.projectModal}
        />
      )}
    </MainLayout>
  );
};

export default Resume;

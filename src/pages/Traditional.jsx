import ProjectCard from "../components/ProjectCard";
import greenProjects from "../data/greenProject";

import { useState } from "react";

function Traditional() {
  const [openProject, setOpenProject] = useState(null);
  const handleClickOutside = (e) => {
    if (e.target.dataset.closearea === "true") {
      setOpenProject(null);
    }
  };
  return (
    <div className="relative">
      <div
        className="pt-20 px-4 space-y-12"
        data-closearea="true"
        onClick={handleClickOutside}
      >
        {greenProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openProject === project.id}
            onOpen={() => setOpenProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Traditional;

import ProjectCard from "../components/ProjectCard";
import modernProjects from "../data/modernProject";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import get from "lodash/get";

function Modern() {
  const [trigger, setTrigger] = useState(0);

  const location = useLocation();
  const scrollId = get(location, ["state", "scrollId"]);
  const page = get(location, ["state", "page"]);
  console.log(page);

  //滚动触发动画
  useEffect(() => {
    const handleScroll = () => {
      setTrigger((prev) => prev + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full pt-16 flex flex-col space-y-8">
      {modernProjects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          trigger={trigger}
          shouldScroll={page === "modern" && scrollId === project.id}
        />
      ))}
    </div>
  );
}

export default Modern;

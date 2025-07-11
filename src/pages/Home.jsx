import ProjectCard from "../components/ProjectCard";
import greenProjects from "../data/greenProject";

import { useEffect, useState } from "react";

function Home() {
  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setTrigger((prev) => prev + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full pt-16 flex flex-col space-y-8">
      {greenProjects.map((project) => (
        <ProjectCard key={project.id} project={project} trigger={trigger} />
      ))}
    </div>
  );
}

export default Home;

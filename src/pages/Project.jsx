import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import get from "lodash/get";
import throttle from "lodash/throttle";

import ProjectCard from "../components/ProjectCard";
import modernProjects from "../data/modernProject";
import greenProjects from "../data/greenProject";
import Navbar from "../components/Navbar";

function Project() {
  //可见项目卡片
  const [visibleIds, setVisibleIds] = useState([]);
  const handleCardVisible = (id) => {
    setVisibleIds((prev) => {
      if (!prev.includes(id)) return [...prev, id];
      return prev;
    });
  };

  const [trigger, setTrigger] = useState(0);

  // 点击跳转导航栏模块
  const [activeTab, setActiveTab] = useState("GREEN");
  const getProjectTab = () => {
    switch (activeTab) {
      case "MODERN":
        return modernProjects;
      case "TRADITIONAL":
        return traditionalProjects;
      case "FIELD":
        return fieldProjects;
      case "GREEN":
      default:
        return greenProjects;
    }
  };

  //滚动触发动画效果(throttle节流)
  useEffect(() => {
    const handleScroll = throttle(() => {
      setTrigger((prev) => prev + 1);
    }, 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //搜索跳转tab栏
  const location = useLocation();
  const scrollId = get(location, ["state", "scrollId"]);
  const page = get(location, ["state", "page"]);
  useEffect(() => {
    setActiveTab(page);
  }, [scrollId]);

  //页面刷新跳转
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      window.scrollTo({ top: 0, behavior: "auto" });
      window.history.replaceState({}, document.title);
    }
  }, []);

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}></Navbar>
      <div className="relative w-full pt-16 flex flex-col space-y-8">
        {getProjectTab().map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            trigger={trigger}
            shouldScroll={scrollId === project.id}
            onVisible={handleCardVisible}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;

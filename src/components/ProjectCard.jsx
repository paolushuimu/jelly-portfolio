import { useEffect, useState, useRef, forwardRef } from "react";

import ProjectSlider from "./ProjectSlider";

const ProjectCard = forwardRef(({ project, trigger, shouldScroll }) => {
  // 控制项目卡片是否展开的状态
  const [isOpen, setIsOpen] = useState(false);
  // 控制鼠标滚动的状态
  const [isScrolled, setIsScrolled] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsScrolled(true);
    const timeout = setTimeout(() => {
      setIsScrolled(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [trigger]);

  //搜索后滚动到相应位置
  useEffect(() => {
    if (shouldScroll && cardRef.current) {
      setTimeout(() => {
        cardRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 1000);
    }
  }, []);

  //卡片点击处理
  const handleCardClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } else {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className={`transition-transform duration-1000 ${
        isScrolled ? "scale-90" : "scale-100"
      }`}
    >
      {!isOpen ? (
        // 未展开状态：小卡片
        <div
          className="relative max-w-md mx-auto w-full cursor-pointer transition"
          onClick={() => setIsOpen(true)}
        >
          {/* 项目标题 */}
          <h2 className="absolute -left-48 w-40 text-xl text-right font-semibold text-gray-800">
            {project.title}
          </h2>

          {/* 项目首图 */}
          <img
            src={project.images[0].src}
            alt={project.title}
            loading="lazy"
            className="w-full ml-4 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      ) : (
        // 展开状态：轮播大卡片
        <div className="relative w-[80rem] h-[40rem] bg-white">
          {/* 项目标题 + 收起按钮（左边absolute定位） */}
          <div className="absolute h-[40rem] text-sm flex flex-col justify-between items-end -left-48 w-40 mb-4">
            <div className=" text-gray-400 flex flex-col ">
              <h2 className="text-xl mb-8 text-right font-semibold text-gray-800">
                {project.title}
              </h2>
              <div className="text-right mb-4">
                主题
                <p className="text-gray-800">{project.subtitle}</p>
              </div>
              <div className="text-right mb-4">
                地区
                <p className="text-gray-800">{project.place}</p>
              </div>
              <div className="text-right mb-4">
                时间
                <p className="text-gray-800">{project.time}</p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation(); //阻止冒泡
                setIsOpen(false);
              }}
              className="text-gray-500 hover:text-red-500 ml-4"
            >
              收起
            </button>
          </div>

          {/* 图片轮播组件 */}
          <ProjectSlider project={project} />
        </div>
      )}
    </div>
  );
});

export default ProjectCard;

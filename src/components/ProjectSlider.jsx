import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";

import "swiper/css";

function ProjectSlider({ project }) {
  const swiperRef = useRef(null);
  const [hoverSide, setHoverSide] = useState(null);
  const targetHeight = 640;

  if (!project) {
    return <div className="p-8">项目未找到。</div>;
  }

  return (
    <div className="relative w-full h-full overflow-visible">
      {/* 左边 hover 控制区 */}
      <div
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-0 w-1/5 h-full z-20 cursor-pointer"
      ></div>

      {/* 右边 hover 控制区 */}
      <div
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
        onClick={() => swiperRef.current?.slideNext()}
        // cursor-pointer：鼠标光标样式
        className="absolute right-0 top-0 w-1/5 h-full z-20 cursor-pointer"
      ></div>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        speed={2000}
        spaceBetween={32}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        freeMode={true}
        className="!h-[40rem] overflow-visible"
      >
        {project.images.map((img, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: `${img.ratio * targetHeight}px`,
            }}
            className="h-full"
          >
            <img
              src={img.src}
              loading="lazy"
              alt={`slide-${i}`}
              className="swiper-lazy h-full w-auto object-contain"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;

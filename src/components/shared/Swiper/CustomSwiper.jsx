import { Swiper as SwiperComponent, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import React from "react";


const CustomSwiper = ({
  children,
  navigation,
  onSlideChange,
  spaceBetween,
  onClick,
  centerSlides,
  slidesPerView,
  autoplay,
  paginationProps,
}) => {
  return (
    <SwiperComponent
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation={navigation}
      pagination={
        paginationProps
          ? {
              clickable: paginationProps.clickable ?? true,
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: ${
                  paginationProps.color ?? "#7214FF"
                }"></span>`;
              },
              el: paginationProps.position
                ? `.${paginationProps.position}-pagination`
                : undefined,
            }
          : {
              clickable: true,
            }
      }
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={onSlideChange}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      centerSlides={centerSlides}
      onClick={onClick}
      autoplay={autoplay}
    >
      {children}
    </SwiperComponent>
  );
};

export default CustomSwiper;

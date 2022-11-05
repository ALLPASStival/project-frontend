import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { slideList } from "@utils/SlideList";
import { SliderItem, Wrapper } from "@components/SlideImage/styles";

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <Wrapper>
      <Slider {...settings} className={"slide"}>
        {slideList.map((v, index) => (
          <SliderItem key={index}>
            <img src={v.src} alt={v.alt} />
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default SliderImage;

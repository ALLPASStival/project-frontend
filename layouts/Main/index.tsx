import React from "react";
import HeaderBar from "@components/HeaderBar";
import SliderImage from "@components/SlideImage";
import FestivalRank from "@components/FestivalRank";
import { Wrapper } from "../../Style/Wrapper";
import FestivalReviews from "@components/FestivalReviews";

const Main = () => {
  return (
    <Wrapper
      style={{
        height: "100%",
        width: "90%",
        paddingLeft: "5rem",
        paddingRight: "5rem",
      }}
    >
      <HeaderBar />
      <SliderImage />
      <FestivalRank />
      <FestivalReviews />
    </Wrapper>
  );
};

export default Main;

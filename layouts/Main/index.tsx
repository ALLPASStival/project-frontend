import React from "react";
import HeaderBar from "@components/HeaderBar";
import SliderImage from "@components/SlideImage";
import FestivalRank from "@components/FestivalRank";
import { Wrapper } from "../../Style/Wrapper";

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
    </Wrapper>
  );
};

export default Main;

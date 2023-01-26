import React from "react";
import HeaderBar from "@components/HeaderBar";
import SliderImage from "@components/SlideImage";
import FestivalRank from "@components/FestivalRank";
import { Wrapper } from "../../Style/Wrapper";
import FestivalReviews from "@components/FestivalReviews";
import { StyledDivColumn } from "../../Style/FlexBox";

const Main = () => {
  return (
    <StyledDivColumn
      style={{
        height: "100%",
        width: "90%",
        paddingTop: "40%",
        paddingLeft: "5rem",
        paddingRight: "5rem",
      }}
    >
      <HeaderBar />
      <SliderImage />
      <FestivalReviews />
      <FestivalRank />
    </StyledDivColumn>
  );
};

export default Main;

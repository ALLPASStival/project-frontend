import React from "react";
import {
  MiddleBox,
  Rank,
  RankBox,
  TopHeader,
  TopLeft,
  Wrapper,
} from "@components/FestivalReviews/styles";
import { TopSearch } from "@pages/Search/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FestivalReviews = () => {
  return (
    <Wrapper>
      <MiddleBox>Lots of reviews</MiddleBox>
      <Rank>
        <RankBox></RankBox>
        <RankBox></RankBox>
        <RankBox></RankBox>
      </Rank>
    </Wrapper>
  );
};

export default FestivalReviews;

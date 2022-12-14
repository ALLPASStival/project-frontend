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
      <TopHeader>
        <TopLeft>축제 찾기</TopLeft>
        <TopSearch>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </TopSearch>
      </TopHeader>
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

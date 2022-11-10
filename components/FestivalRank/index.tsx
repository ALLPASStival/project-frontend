import React from "react";
import {
  Rank,
  RankBox,
  TopHeader,
  TopLeft,
  TopRight,
  Wrapper,
} from "@components/FestivalRank/styles";

const FestivalRank = () => {
  return (
    <Wrapper>
      <TopHeader>
        <TopLeft>축제 순위</TopLeft>
        <TopRight>전체 보기</TopRight>
      </TopHeader>
      <Rank>
        <RankBox>박스</RankBox>
        <RankBox>박스</RankBox>
        <RankBox>박스</RankBox>
      </Rank>
    </Wrapper>
  );
};

export default FestivalRank;
